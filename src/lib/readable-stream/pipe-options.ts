import { AbortSignal } from '../abort-signal';

export interface PipeOptions {
  preventAbort?: boolean;
  preventCancel?: boolean;
  preventClose?: boolean;
  signal?: AbortSignal;
}

export interface ValidatedPipeOptions {
  preventAbort: boolean;
  preventCancel: boolean;
  preventClose: boolean;
  signal?: AbortSignal;
}