import React, { FC } from 'react';

import { Alert } from 'app/types/unified-alerting';

import { Annotation } from '../../utils/constants';
import { AnnotationDetailsField } from '../AnnotationDetailsField';
import { DetailsField } from '../DetailsField';

interface Props {
  instance: Alert;
}

export const AlertInstanceDetails: FC<Props> = ({ instance }) => {
  let annotations = (Object.entries(instance.annotations || {}) || []).filter(([_, value]) => !!value.trim());
  // process panel link if it exists
  let panelId = annotations.find((item) => item[0] === Annotation.panelID);
  let dashUid = annotations.find((item) => item[0] === Annotation.dashboardUID);
  if (dashUid && panelId) {
    panelId[1] = `${dashUid[1]}&viewPanel=${panelId[1]}`;
  }

  return (
    <div>
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
