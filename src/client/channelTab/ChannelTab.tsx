import * as React from "react";
import { Provider, Flex, Text, Button, Header, ContentIcon } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import { TaskModuleDimension } from "@microsoft/teams-js";
import WelcomeCard from "../dialogs/WelcomeDialog";

/**
 * Implementation of the channel tab content page
 */
export const ChannelTab = () => {

    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();
    const submitHandler = (err, result) => {
        console.log("@@@@@" + JSON.stringify(result));
        microsoftTeams.tasks.submitTask(WelcomeCard, "c4fbf41a-fd74-4b1c-98bb-60642902bd7c");
    };

    const onClick = () => {
        microsoftTeams.tasks.startTask({
            height: TaskModuleDimension.Medium,
            width: TaskModuleDimension.Medium,
            card: WelcomeCard,
            title: "test",
        });
        microsoftTeams.getContext((context: microsoftTeams.Context) => {
            console.log("channelId " + context.channelId);
            console.log("chatId " + context.chatId);
        });
    };

    useEffect(() => {
        if (inTeams === true) {
            microsoftTeams.appInitialization.notifySuccess();
        } else {
            setEntityId("Not in Microsoft Teams");
        }
    }, [inTeams]);

    useEffect(() => {
        if (context) {
            setEntityId(context.entityId);
        }
    }, [context]);

    /**
     * The render() method to create the UI of the tab
     */
    return (
        <Provider theme={theme}>
            <Flex fill={true} column styles={{
                padding: ".8rem 0 .8rem .5rem"
            }}>
                <Flex.Item>
                    <Header content="This is your tab" />
                </Flex.Item>
                <Flex.Item>
                    <div>
                        <div>
                            <Text content={entityId} />
                        </div>

                        <div>
                            <Button onClick={onClick}>A sample button</Button>
                        </div>
                    </div>
                </Flex.Item>
                <Flex.Item styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Text size="smaller" content="(C) Copyright Microsoft" />
                </Flex.Item>
            </Flex>
        </Provider>
    );
};
