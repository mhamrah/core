
<header
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use'])}
><slot></slot></header>

<script>
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
</script>
