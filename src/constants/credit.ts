import React from "react";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillHome } from "react-icons/ai";
import { BiLogoMastodon } from "react-icons/bi";

export enum ContactChannel {
    Homepage = "homepage",
    Github = "github",
    Email = "email",
    Twitter = "twitter",
    Mastodon = "mastodon",
}

export interface CreditItem {
    name: string;
    role: string;
    avatarUrl: string;
    channels: [ContactChannel, string][];
}

export const CHANNEL_TYPE_ICON_MAP: Record<ContactChannel, React.ComponentType> = {
    [ContactChannel.Github]: AiFillGithub,
    [ContactChannel.Email]: AiOutlineMail,
    [ContactChannel.Twitter]: AiOutlineTwitter,
    [ContactChannel.Mastodon]: BiLogoMastodon,
    [ContactChannel.Homepage]: AiFillHome,
};

export const CREDIT_USER: CreditItem[] = [
    {
        name: "zeroday0619",
        role: "back-end engineer",
        avatarUrl: "https://avatars.githubusercontent.com/u/54426648?v=4",
        channels: [
            [ContactChannel.Homepage, "https://zeroday0619.dev"],
            [ContactChannel.Github, "https://github.com/zeroday0619"],
            [ContactChannel.Email, "mailto:zeroday0619_dev@outlook.com"],
            [ContactChannel.Twitter, "https://twitter.com/dev_zeroday0619"],
            [ContactChannel.Mastodon, "https://social.silicon.moe/@zeroday0619"],
        ],
    },
    {
        name: "async3619",
        role: "front-end engineer",
        avatarUrl: "https://avatars.githubusercontent.com/u/5947388?v=4",
        channels: [
            [ContactChannel.Homepage, "https://sophia-dev.io"],
            [ContactChannel.Github, "https://github.com/async3619"],
            [ContactChannel.Email, "mailto:me@sophia-dev.io"],
            [ContactChannel.Twitter, "https://twitter.com/____glfx"],
        ],
    },
];
