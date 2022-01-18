import { createContext } from "react";

const NotifictionContext = createContext({
	notification: null,
	showNotification: function (setActiveNotification) { },
	hideNotification: function () { }
})
export function NotificationContextProvider(props) {
	const [activeNotification, setActiveNotification] = useState()

	function showNotificationHadler(notificationData) {
		setActiveNotification(notificationData)
	}
	function hideNotificationHadler() {
		setActiveNotification(null)
	}

	const context =
	{
		notification: activeNotification,
		showNotification: showNotificationHadler,
		hideNotification: hideNotificationHadler
	}

	return (
		<NotifictionContext.Provider>
			{props.children}
		</NotifictionContext.Provider>
	)
}

export default NotifictionContext