import React from 'react';

import { TagList } from '@grafana/ui';

type Props = { labels: Record<string, string>; className?: string; showLabelKeys?: boolean };

export const AlertLabels = ({ labels, className, showLabelKeys }: Props) => {
  const pairs = Object.entries(labels).filter(([key]) => !(key.startsWith('__') && key.endsWith('__')));
  return (
    <div className={className}>
      <TagList tags={Object.values(pairs).map(([label, value]) => (showLabelKeys ? `${label}=${value}` : value))} />
    </div>
  );
};
