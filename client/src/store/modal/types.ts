export enum ModalStatus {
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IModal {
  modalOpen: boolean;
  modalStatus: ModalStatus;
}
