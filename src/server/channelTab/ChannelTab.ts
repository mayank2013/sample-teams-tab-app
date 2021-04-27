import { PreventIframe } from "express-msteams-host";
import SuccessCard from "../../client/dialogs/SuccessCard";

import {
    CardFactory,
    TurnContext,
    MemoryStorage,
    ConversationState,
    InvokeResponse,
    ActivityHandler,
    TeamsActivityHandler,
    TaskModuleResponse
  } from "botbuilder";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/channelTab/index.html")
@PreventIframe("/channelTab/config.html")
@PreventIframe("/channelTab/remove.html")
export class ChannelTab extends ActivityHandler{

    public constructor () {
        super();
        console.log("Here");
        const primaryResponse = {
            task: {
              type: "continue",
              value: {
                height: "medium",
                width: "medium",
                title: "task",
                card: SuccessCard,
              },
            },
        };
        const responseBody = {
            task: {
              type: "continue",
              value: primaryResponse
            },
        };
        // Set up the Activity processing
        this.onInvokeActivity = async (
          context: TurnContext
        ): Promise<InvokeResponse> => {
            console.log("Hello Mayank");
            return { status: 200, body: responseBody };
           }
        }
  
}
