import React from 'react';

import { TagList } from '@grafana/ui';

type Props = { labels: Record<string, string>; className?: string; showLabelKeys?: boolean };

export const AlertLabels = ({ labels, className, showLabelKeys }: Props) => {
  let pairs = Object.entries(labels).filter(([key]) => !(key.startsWith('__') && key.endsWith('__')));
  //iNSight clean off extra info to simplify view
  pairs = pairs.filter(function (obj) {
    return obj[0] !== 'alertname';
  });
  pairs = pairs.filter(function (obj) {
    return obj[1] !== 'integrations/node_exporter';
  });
  if (labels.instance && labels.short) {
    pairs = pairs.filter(function (obj) {
      return obj[0] !== 'short';
    });
  }

  return (
    <div className={className}>
      <TagList tags={Object.values(pairs).map(([label, value]) => (showLabelKeys ? `${label}=${value}` : value))} />
    </div>
  );
};
