import React, { createContext, useContext } from 'react';
import {ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

type NotificationType = 'success' | 'info' | 'warning' | 'danger';

interface TriggerType {
  title: string;
  message: string;
}

interface NotificationTriggerContextType {
  triggerNotification: (type: NotificationType, { title, message }: TriggerType) => void;
  triggerInfo: ({title,message}:TriggerType) => void;
  triggerError: ({title,message}:TriggerType) => void;
  triggerWarning: ({title,message}:TriggerType) => void;
  triggerSuccess: ({title,message}:TriggerType) => void;
}

const NotificationTriggerContext = createContext<NotificationTriggerContextType>({
  triggerNotification: () => {},
  triggerInfo: () => {},
  triggerError: () => {},
  triggerWarning: () => {},
  triggerSuccess: () => {},
});

export const useNotificationTrigger = () => useContext(NotificationTriggerContext);

interface NotificationTriggerProviderProps {
  children: React.ReactNode;
}

export function NotificationTriggerProvider({ children }: NotificationTriggerProviderProps) {
  const triggerNotification = (type: NotificationType, { title, message }: TriggerType) => {
    Store.addNotification({
      title,
      message,
      type, // 'success', 'info', 'warning', 'danger'
      container: 'bottom-left',
      insert: 'bottom',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 6500,
        onScreen: true,
      },
    });
  };
  const triggerInfo = ({title = 'Info', message = 'Information Description'})=>{
    triggerNotification('info',{title,message})
  }
  const triggerError = ({title = 'Error', message = 'Error Description'})=>{
    triggerNotification('danger',{title,message})
  }
  const triggerSuccess = ({title = 'Success', message = 'Success Description'})=>{
    triggerNotification('success',{title,message})
  }
  const triggerWarning = ({title = 'Warning', message = 'Warning Description'})=>{
    triggerNotification('warning',{title,message})
  }

  return (
    <NotificationTriggerContext.Provider value={{ triggerNotification, triggerInfo, triggerError, triggerSuccess, triggerWarning }}>
      <ReactNotifications />
      {children}
    </NotificationTriggerContext.Provider>
  );
}
