import { css, cx } from '@emotion/css';
import React, { FunctionComponent } from 'react';

import { GrafanaTheme, Labels } from '@grafana/data';

import { stylesFactory } from '../../themes';
import { withTheme } from '../../themes/ThemeContext';
import { Themeable } from '../../types/theme';

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    logsLabels: css`
      display: flex;
      flex-wrap: wrap;
      font-size: ${theme.typography.size.xs};
    `,
    logsLabel: css`
      label: logs-label;
      display: flex;
      padding: 0 2px;
      background-color: ${theme.colors.bg2};
      border-radius: ${theme.border.radius};
      margin: 1px 4px 0 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `,
    logsLabelValue: css`
      label: logs-label__value;
      display: inline-block;
      max-width: 20em;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
  };
});

interface Props extends Themeable {
  labels: Labels;
  customLabels: string;
}

export const UnThemedCustomLogLabels: FunctionComponent<Props> = ({ labels, customLabels, theme }) => {
  const styles = getStyles(theme);
  const displayLabels = Object.keys(labels);
  const customLabelList = customLabels?.split(',').filter((item) => displayLabels?.includes(item));

  if (customLabelList.length === 0 || displayLabels.length === 0) {
    return (
      <span className={cx([styles.logsLabels])}>
        {/* <span className={cx([styles.logsLabel])}>(no custom labels)</span> */}
      </span>
    );
  }

  return (
    <span className={cx([styles.logsLabels])}>
      {displayLabels
        .sort()
        .filter((item) => customLabelList.includes(item))
        .map((label) => {
          const value = labels[label];
          if (!value) {
            return;
          }
          const tooltip = `${label}: ${value}`;
          return (
            <span key={label} className={cx([styles.logsLabel])}>
              <span className={cx([styles.logsLabelValue])} title={tooltip}>
                {value}
              </span>
            </span>
          );
        })}
    </span>
  );
};

export const CustomLogLabels = withTheme(UnThemedCustomLogLabels);
CustomLogLabels.displayName = 'CustomLogLabels';
