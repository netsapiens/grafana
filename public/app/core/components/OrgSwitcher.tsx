import { css } from '@emotion/css';
import React, { ReactElement, useState } from 'react';
import { useAsync } from 'react-use';

import { UserOrgDTO } from '@grafana/data';
import { Button, CustomScrollbar, Icon, Input, Modal } from '@grafana/ui';
import config from 'app/core/config';
import { contextSrv } from 'app/core/services/context_srv';

import { api } from '../../features/profile/api';

interface Props {
  onDismiss: () => void;
}

export function OrgSwitcher({ onDismiss }: Props): ReactElement {
  const { value: orgs = [] } = useAsync(() => {
    return api.loadOrgs();
  }, []);
  const currentOrgId = contextSrv.user.orgId;
  const contentClassName = css({
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(85vh - 42px)',
  });
  const [orgsQuery, setOrgsQuery] = useState('');
  const setCurrentOrg = async (org: UserOrgDTO) => {
    await api.setUserOrg(org);
    window.location.href = `${config.appSubUrl}${config.appSubUrl.endsWith('/') ? '' : '/'}?orgId=${org.orgId}`;
  };
  const onSearchQueryChange = (value: string) => {
    setOrgsQuery(value.toString().toLowerCase());
  };

  return (
    <Modal
      title="Switch Organization"
      icon="arrow-random"
      onDismiss={onDismiss}
      isOpen={true}
      contentClassName={contentClassName}
    >
      <Input
        prefix={<Icon name="search" />}
        placeholder="Search for an organization"
        onChange={(v) => onSearchQueryChange(v.currentTarget.value)}
      />

      <CustomScrollbar autoHeightMin="100%">
        <table className="filter-table form-inline">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orgs
              .filter((item) => item.name.toLowerCase().includes(orgsQuery))
              .map((org) => (
                <tr key={org.orgId}>
                  <td>{org.name}</td>
                  <td>{org.role}</td>
                  <td className="text-right">
                    {org.orgId === currentOrgId ? (
                      <Button size="sm">Current</Button>
                    ) : (
                      <Button variant="secondary" size="sm" onClick={() => setCurrentOrg(org)}>
                        Switch to
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </CustomScrollbar>
    </Modal>
  );
}
