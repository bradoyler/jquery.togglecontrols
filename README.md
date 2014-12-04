### toggleControls - jQuery plugin to help with `$.toggleClass()`

#### [Demo](http://bradoyler.github.io/jquery.togglecontrols/examples/)

#### Default Options
```js
{
  toggleClass: 'is-open',
  targetActiveClass: 'is-active',
  eventName:'click'
}
```

#### Example

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="../jquery.togglecontrols.js"></script>
<script type="text/javascript">
  $(function (){
    $('.js-toggle').togglecontrols();
  });
</script>
<a href="#" class="js-toggle" data-togglecontrols='{"toggleClass":"is-hidden", "selector":".panel"}'>
  Toggle Control demo
</a>
<h1 class='panel is-hidden'>Panel</h1>
```
