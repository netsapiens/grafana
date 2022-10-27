import { isEmpty } from 'lodash';
import React, { FC } from 'react';

import { Stack } from '@grafana/experimental';

import { useRulesSourcesWithRuler } from '../../../hooks/useRuleSourcesWithRuler';
import { RuleFormType } from '../../../types/rule-form';

import { GrafanaManagedRuleType } from './GrafanaManagedAlert';
import { MimirFlavoredType } from './MimirOrLokiAlert';
import { RecordingRuleType } from './MimirOrLokiRecordingRule';

interface RuleTypePickerProps {
  onChange: (value: RuleFormType) => void;
  selected: RuleFormType;
  enabledTypes: RuleFormType[];
}

const RuleTypePicker: FC<RuleTypePickerProps> = ({ selected, onChange, enabledTypes }) => {
  const rulesSourcesWithRuler = useRulesSourcesWithRuler();
  const hasLotexDatasources = !isEmpty(rulesSourcesWithRuler);

  return (
    <>
      <Stack direction="row" gap={2}>
        {enabledTypes.includes(RuleFormType.cloudAlerting) && (
          <MimirFlavoredType selected={selected === RuleFormType.cloudAlerting} onClick={onChange} />
        )}
        {enabledTypes.includes(RuleFormType.cloudRecording) && (
          <RecordingRuleType selected={selected === RuleFormType.cloudRecording} onClick={onChange} />
        )}
        {!hasLotexDatasources && enabledTypes.includes(RuleFormType.grafana) && (
          <GrafanaManagedRuleType selected={selected === RuleFormType.grafana} onClick={onChange} />
        )}
      </Stack>
    </>
  );
};

export { RuleTypePicker };
