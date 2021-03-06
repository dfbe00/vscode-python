// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { DataScience } from '../../common/utils/localize';
import { ReportableAction } from './types';

const progressMessages = {
    [ReportableAction.JupyterSessionWaitForIdleSession]: DataScience.waitingForJupyterSessionToBeIdle(),
    [ReportableAction.KernelsGetKernelForLocalConnection]: DataScience.gettingListOfKernelsForLocalConnection(),
    [ReportableAction.KernelsGetKernelForRemoteConnection]: DataScience.gettingListOfKernelsForRemoteConnection(),
    [ReportableAction.KernelsGetKernelSpecs]: DataScience.gettingListOfKernelSpecs(),
    [ReportableAction.KernelsRegisterKernel]: DataScience.registeringKernel(),
    [ReportableAction.NotebookConnect]: DataScience.connectingToJupyter(),
    [ReportableAction.NotebookStart]: DataScience.startingJupyterNotebook(),
    [ReportableAction.RawKernelConnecting]: DataScience.rawKernelConnectingSession(),
    [ReportableAction.CheckingIfImportIsSupported]: 'Checking if import is supported', // Localize these later
    [ReportableAction.InstallingMissingDependencies]: 'Installing missing dependencies',
    [ReportableAction.ExportNotebookToPython]: 'Exporting Notebook to Python'
};

/**
 * Given a reportable action, this will return the user friendly message.
 *
 * @export
 * @param {ReportableAction} action
 * @returns {(string | undefined)}
 */
export function getUserMessageForAction(action: ReportableAction): string | undefined {
    return progressMessages[action];
}
