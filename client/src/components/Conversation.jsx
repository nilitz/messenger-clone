import React from 'react';
import "../styles/conversation.css"

export default function Conversation({conversationId}) {
    return (
        <div className={"conversation-container"}>
            <div className={"conversation"}>
                {conversationId}
            </div>
        </div>
    )
}
