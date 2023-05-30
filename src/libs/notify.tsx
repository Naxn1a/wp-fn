import { notifications } from "@mantine/notifications";

export default (text: string, color: string) => {
    return notifications.show({
        title: text,
        message: "",
        autoClose: 3000,
        withCloseButton: true,
        color: color,
    });
};
