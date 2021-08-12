import 'shiny';
import { makeCallback } from './callbacks';
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';

let notifier;
Shiny.addCustomMessageHandler('awn-notify', (msg) => {
  dispatch(msg);
});

Shiny.addCustomMessageHandler('awn-modal', (msg) => {
  init();
  notifier.modal(msg.content, 'modal-awn', msg.options);
});

Shiny.addCustomMessageHandler('awn-ask', (msg) => {
  init();
  notifier.confirm(
    msg.content,
    makeCallback(msg.id, msg.ns, true),
    makeCallback(msg.id, msg.ns, false),
    msg.options
  )
});

Shiny.addCustomMessageHandler('awn-globals', (msg) => {
  notifier = new AWN(globalOptions);
});

const dispatch = (msg) => {
  init();
  switch(msg.type) {
    case 'warning':
      notifier.warning(msg.content, msg.options);
      break;
    case 'tip':
      notifier.tip(msg.content, msg.options);
      break;
    case 'info':
      notifier.info(msg.content, msg.options);
      break;
    case 'success':
      notifier.success(msg.content, msg.options);
      break;
    case 'alert':
      notifier.alert(msg.content, msg.options);
      break;
    default:
      notifier.alert(msg.content, msg.options);
      break;
  }
}

const init = () => {
  if(notifier != undefined)
    return;
  
  notifier = new AWN();
}
