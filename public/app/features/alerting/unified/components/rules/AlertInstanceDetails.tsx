import { css } from '@emotion/css';
import React, { FC } from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { HorizontalGroup, LinkButton, useStyles2 } from '@grafana/ui';
import { Alert } from 'app/types/unified-alerting';

import { Annotation } from '../../utils/constants';
import { AnnotationDetailsField } from '../AnnotationDetailsField';
import { DetailsField } from '../DetailsField';

interface Props {
  instance: Alert;
}

export const AlertInstanceDetails: FC<Props> = ({ instance }) => {
  const leftButtons: JSX.Element[] = [];
  const style = useStyles2(getStyles);
  let annotations = (Object.entries(instance.annotations || {}) || []).filter(([_, value]) => !!value.trim());
  // process panel link if it exists
  let panelId = annotations.find((item) => item[0] === Annotation.panelID);
  let dashUid = annotations.find((item) => item[0] === Annotation.dashboardUID);
  let runbookURL = annotations.find((item) => item[0] === Annotation.runbookURL);
  //iNSight show buttons on alert at top instead of inline.
  if (runbookURL && runbookURL[1]) {
    leftButtons.push(
      <LinkButton
        className={style.button}
        size="xs"
        key="runbook"
        variant="primary"
        icon="book"
        target="__blank"
        href={`${runbookURL[1]}`}
      >
        Runbook
      </LinkButton>
    );
    annotations = annotations.filter(function (obj) {
      return obj[0] !== Annotation.runbookURL;
    });
  }
  if (dashUid && dashUid[1]) {
    leftButtons.push(
      <LinkButton
        className={style.button}
        size="xs"
        key="dashboard"
        variant="primary"
        icon="apps"
        target="__blank"
        href={`d/${dashUid[1]}`}
      >
        Dashboard
      </LinkButton>
    );
    annotations = annotations.filter(function (obj) {
      return obj[0] !== Annotation.dashboardUID;
    });
    if (panelId && panelId[1]) {
      leftButtons.push(
        <LinkButton
          className={style.button}
          size="xs"
          key="panel"
          variant="primary"
          icon="apps"
          target="__blank"
          href={`d/${dashUid[1]}&viewPanel=${panelId[1]}`}
        >
          Panel
        </LinkButton>
      );
      annotations = annotations.filter(function (obj) {
        return obj[0] !== Annotation.panelID;
      });
    }
  }

  return (
    <div>
      <div className={style.wrapper}>
        <HorizontalGroup width="auto">{leftButtons.length ? leftButtons : <div />}</HorizontalGroup>
      </div>
      {instance.value && (
        <DetailsField label="Value" horizontal={true}>
          {instance.value}
        </DetailsField>
      )}
      {annotations.map(([key, value]) => (
        <AnnotationDetailsField key={key} annotationKey={key} value={value} buttonize={true} />
      ))}
    </div>
  );
};

export const getStyles = (theme: GrafanaTheme2) => ({
  wrapper: css`
    padding: ${theme.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  button: css`
    height: 24px;
    margin-top: ${theme.spacing(1)};
    font-size: ${theme.typography.size.sm};
  `,
});
