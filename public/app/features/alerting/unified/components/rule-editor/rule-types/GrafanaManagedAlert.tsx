import React, { FC } from 'react';

import { RuleFormType } from '../../../types/rule-form';

import { RuleType, SharedProps } from './RuleType';

const GrafanaManagedRuleType: FC<SharedProps> = ({ selected = false, disabled, onClick }) => {
  return (
    <RuleType
      name="Grafana managed alert"
      description={
        <span>
          NOT RECOMMENDED FOR USE!
          <br />
          If you are seeing this option, please contact NetSapiens support for help with missing data sources.
        </span>
      }
      image="public/img/grafana_icon.svg"
      selected={selected}
      disabled={disabled}
      value={RuleFormType.grafana}
      onClick={onClick}
    />
  );
};

export { GrafanaManagedRuleType };
