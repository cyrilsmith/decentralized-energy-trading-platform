import {
    ProFormDateTimePicker,
    ProFormRadio,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    StepsForm,
  } from '@ant-design/pro-components';
  import { useIntl, FormattedMessage } from 'react-intl';
  import { Modal } from 'antd';
  import React from 'react';
  
  interface TradeListItem {
    key?: number;
    energyType?: string;
    description?: string;
    target?: string;
    template?: string;
    tradeType?: string;
    startTime?: string;
    frequency?: string;
  }
  
  export type FormValueType = {
    energyType?: string;
    template?: string;
    tradeType?: string;
    startTime?: string;
    frequency?: string;
  } & Partial<TradeListItem>;
  
  export type UpdateFormProps = {
    onCancel: (flag?: boolean, formVals?: FormValueType) => void;
    onSubmit: (values: FormValueType) => Promise<void>;
    updateModalOpen: boolean;
    values: Partial<TradeListItem>;
  };
  
  const UpdateForm: React.FC<UpdateFormProps> = (props) => {
    const intl = useIntl();
    return (
      <StepsForm
        stepsProps={{
          size: 'small',
        }}
        stepsFormRender={(dom, submitter) => (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.tradeConfig',
              defaultMessage: 'Trade Configuration',
            })}
            open={props.updateModalOpen}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        )}
        onFinish={props.onSubmit}
      >
        <StepsForm.StepForm
          initialValues={{
            energyType: props.values.energyType,
            description: props.values.description,
          }}
          title={intl.formatMessage({
            id: 'pages.tradeTable.updateForm.basicConfig',
            defaultMessage: 'Basic Information',
          })}
        >
          <ProFormText
            name="energyType"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.energyType.nameLabel',
              defaultMessage: 'Energy Type',
            })}
            width="md"
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'pages.tradeTable.updateForm.energyType.nameRules',
                  defaultMessage: 'Please enter the energy type!',
                }),
              },
            ]}
          />
          <ProFormTextArea
            name="description"
            width="md"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.tradeDesc.descLabel',
              defaultMessage: 'Trade Description',
            })}
            placeholder={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.tradeDesc.descPlaceholder',
              defaultMessage: 'Please enter at least five characters',
            })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'pages.tradeTable.updateForm.tradeDesc.descRules',
                  defaultMessage: 'Please enter a trade description with at least five characters!',
                }),
                min: 5,
              },
            ]}
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          initialValues={{
            target: '0',
            template: '0',
          }}
          title={intl.formatMessage({
            id: 'pages.tradeTable.updateForm.tradeProps.title',
            defaultMessage: 'Configure Trade Properties',
          })}
        >
          <ProFormSelect
            name="target"
            width="md"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.tradeObject',
              defaultMessage: 'Trading Object',
            })}
            valueEnum={{
              0: 'Residential',
              1: 'Commercial',
            }}
          />
          <ProFormSelect
            name="template"
            width="md"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.tradeProps.templateLabel',
              defaultMessage: 'Trade Template',
            })}
            valueEnum={{
              0: 'Template A',
              1: 'Template B',
            }}
          />
          <ProFormRadio.Group
            name="tradeType"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.tradeProps.typeLabel',
              defaultMessage: 'Trade Type',
            })}
            options={[
              {
                value: '0',
                label: 'Buy',
              },
              {
                value: '1',
                label: 'Sell',
              },
            ]}
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          initialValues={{
            frequency: 'monthly',
          }}
          title={intl.formatMessage({
            id: 'pages.tradeTable.updateForm.schedulingPeriod.title',
            defaultMessage: 'Set Scheduling Period',
          })}
        >
          <ProFormDateTimePicker
            name="startTime"
            width="md"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.schedulingPeriod.timeLabel',
              defaultMessage: 'Start Time',
            })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'pages.tradeTable.updateForm.schedulingPeriod.timeRules',
                  defaultMessage: 'Please select a start time!',
                }),
              },
            ]}
          />
          <ProFormSelect
            name="frequency"
            label={intl.formatMessage({
              id: 'pages.tradeTable.updateForm.schedulingPeriod.frequencyLabel',
              defaultMessage: 'Frequency',
            })}
            width="md"
            valueEnum={{
              monthly: 'Monthly',
              weekly: 'Weekly',
              daily: 'Daily',
            }}
          />
        </StepsForm.StepForm>
      </StepsForm>
    );
  };
  
  export default UpdateForm;
  