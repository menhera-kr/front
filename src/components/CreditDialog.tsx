import React from "react";

import { Box, Button, Dialog, DialogActions, DialogContent, Hidden, Stack, Typography } from "@mui/material";

import { Window } from "@components/Window";
import { IconLink, Item, ItemContainer, Profile } from "@components/CreditDialog.styles";

import { CHANNEL_TYPE_ICON_MAP, CREDIT_USER } from "@constants/credit";

export interface CreditDialogProps {
    open: boolean;
    onClose: () => void;
}

export function CreditDialog({ open, onClose }: CreditDialogProps) {
    const content = (
        <Box p={2}>
            <Typography variant="h6" textAlign="center" sx={{ mb: 4 }}>
                만든 사람들
            </Typography>
            <ItemContainer>
                {CREDIT_USER.map(user => (
                    <Item key={user.name}>
                        <Profile style={{ backgroundImage: `url(${user.avatarUrl})` }} />
                        <Typography variant="body1" textAlign="center">
                            /{user.name}/
                        </Typography>
                        <Typography variant="body1" textAlign="center">
                            {user.role}
                        </Typography>
                        <Box mt={1}>
                            <Stack spacing={2} direction="row">
                                {user.channels.map(([channel, url]) => {
                                    const Icon = CHANNEL_TYPE_ICON_MAP[channel];

                                    return (
                                        <IconLink
                                            key={channel}
                                            href={url}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Icon />
                                        </IconLink>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Item>
                ))}
            </ItemContainer>
        </Box>
    );

    return (
        <>
            <Hidden mdUp>
                <Dialog
                    fullWidth
                    open={open}
                    onClose={onClose}
                    maxWidth="sm"
                    sx={{ "& .MuiDialog-paper": { borderRadius: 0 } }}
                >
                    <div data-testid="credit-dialog-root">
                        <DialogContent dividers>{content}</DialogContent>
                        <DialogActions>
                            <Button onClick={onClose}>닫기</Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </Hidden>
            <Hidden mdDown>
                <Dialog fullWidth open={open} onClose={onClose} maxWidth="sm">
                    <div data-testid="credit-dialog-root">
                        <Box overflow="hidden">
                            <Window maxWidth="sm" contentAware={false} title="Credit">
                                {content}
                            </Window>
                        </Box>
                    </div>
                </Dialog>
            </Hidden>
        </>
    );
}
