import { css, cx } from '@emotion/css';
import React, { FC } from 'react';

import { GrafanaTheme, GrafanaTheme2 } from '@grafana/data';
import { LinkButton, Tooltip, useStyles, useStyles2 } from '@grafana/ui';

import { Annotation, annotationLabels } from '../utils/constants';

import { DetailsField } from './DetailsField';
import { Tokenize } from './Tokenize';
import { Well } from './Well';

const wellableAnnotationKeys = ['message', 'description'];

interface Props {
  annotationKey: string;
  value: string;
  buttonize?: boolean;
}

export const AnnotationDetailsField: FC<Props> = ({ annotationKey, value, buttonize }) => {
  const styles = useStyles2(getStyles2);
  const label = annotationLabels[annotationKey as Annotation] ? (
    <Tooltip content={annotationKey} placement="top" theme="info">
      <span>{annotationLabels[annotationKey as Annotation]}</span>
    </Tooltip>
  ) : (
    annotationKey
  );

  if (
    buttonize &&
    (annotationKey === Annotation.dashboardUID ||
      annotationKey === Annotation.panelID ||
      annotationKey === Annotation.runbookURL)
  ) {
    const href = `${annotationKey === Annotation.runbookURL ? '' : 'd/'}${value}`;
    return (
      <div className={cx(styles.field)}>
        <LinkButton
          size="xs"
          key={`${annotationKey}-button`}
          variant="primary"
          icon="link"
          target="__blank"
          href={href}
        >
          {annotationLabels[annotationKey].split(' ')[0]}
        </LinkButton>
      </div>
    );
  }

  return (
    <DetailsField label={label} horizontal={true}>
      <AnnotationValue annotationKey={annotationKey} value={value} />
    </DetailsField>
  );
};

interface ValueProps {
  annotationKey: string;
  value: string;
}

const AnnotationValue: FC<ValueProps> = ({ annotationKey, value }) => {
  const styles = useStyles(getStyles);

  const needsWell = wellableAnnotationKeys.includes(annotationKey);
  const needsLink = value && value.startsWith('http');

  const tokenizeValue = <Tokenize input={value} delimiter={['{{', '}}']} />;

  if (needsWell) {
    return <Well className={styles.well}>{tokenizeValue}</Well>;
  }

  if (needsLink) {
    return (
      <a href={value} target="__blank" className={styles.link}>
        {value}
      </a>
    );
  }

  return <>{tokenizeValue}</>;
};

export const getStyles = (theme: GrafanaTheme) => ({
  well: css`
    word-break: break-word;
  `,
  link: css`
    word-break: break-all;
    color: ${theme.colors.textBlue};
  `,
});

const getStyles2 = (theme: GrafanaTheme2) => ({
  field: css`
    display: flex;
    margin: ${theme.spacing(2)} 0;
    flex-direction: row;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }

    & > div:first-child {
      width: 110px;
      padding-right: ${theme.spacing(1)};
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.fontWeightBold};
      line-height: 1.8;
    }
    & > div:nth-child(2) {
      flex: 1;
      color: ${theme.colors.text.secondary};
    }
  `,
});
