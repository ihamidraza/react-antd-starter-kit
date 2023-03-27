import { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";
import { MainContainer } from "@minchat/react-chat-ui";

export const Chat: FC = () => {

    const navigate = useNavigate()


    return (
        <div style={{ height: '100vh' }}>
            <MainContainer
                inbox={{
                    onScrollToBottom: () => { },
                    themeColor: "#6ea9d7",
                    conversations: [{
                        id: "1",
                        title: "Epic gamers",
                        avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
                        , lastMessage: {
                            seen: false,
                            text: "Hello everbody"
                            ,
                            user: {
                                id: "martha_stewart",
                                name: "Daniel",
                                avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                            }
                        }
                    }, {
                        id: "2",

                        title: "Devops",
                        lastMessage: {
                            seen: true,
                            text: "How do you enable an actuator on a servo motor of a hardware and design laboratory experiment in the city,an actuator on a servo motor of a hardware and design laboratory experiment in the city",

                            user: {
                                avatar: "https://fsdfsdfsdfs",
                                id: "daniel",
                                name: "Daniel",
                            }
                        }
                    }],
                    loading: false,
                    onConversationClick: () => console.log("onChat click"),
                    selectedConversationId: "1"
                }}
                selectedConversation={
                    {
                        themeColor: "#6ea9d7",
                        messages: [
                            {
                                "user": {
                                    "id": "danny_1",
                                    "name": "Daniel Georgetown",
                                    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"

                                },
                                "text": "first message"
                            },
                            {
                                "user": {
                                    "id": "mark",
                                    "name": "Markus"
                                },
                                "text": "hello"
                            }],
                        header: "Sandra Bullock",
                        currentUserId: "danny_1",
                        onSendMessage: () => console.log("onSendMessage"),
                        onBack: () => { }

                    }
                }
            />
        </div>
    );
} 