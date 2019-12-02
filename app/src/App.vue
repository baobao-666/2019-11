<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;padding: 0;
  
}
#app,html,body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html{
   font-size: calc(100vw/750*100);
}
body{
  font-size: .32rem;
}
*{
  margin: 0;
  padding: 0;
 list-style: none;
  box-sizing: border-box;
}

</style>
