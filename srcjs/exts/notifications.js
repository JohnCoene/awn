import 'shiny';
import { makeCallback } from './callbacks';
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';

export const create = (opts) => {
  return new AWN(opts || {})
}

let notifier;
Shiny.addCustomMessageHandler('awn-notify', (msg) => {
  dispatch(msg);
});

Shiny.addCustomMessageHandler('awn-modal', (msg) => {
  init();
  notifier.modal(msg.content, 'modal-awn', msg.options);

  if (msg.onShown)
    eval(msg.onShown);
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
  notifier = new AWN(msg.options);
});

const dispatch = (msg) => {
  init();
  switch (msg.type) {
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
  if (notifier != undefined)
    return;

  notifier = new AWN();
}
