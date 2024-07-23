<template>
  <v-app>
    
    <v-navigation-drawer app mini-variant expand-on-hover permanent dark color="#0b2d39">
      <v-list class="pt-0" height="63px">
        <v-list-item class="px-1">
          <v-list-item-avatar tile size="50"> <v-img src="./assets/ai_logo1.png"></v-img> </v-list-item-avatar>  
          <v-list-item-title> <v-img width="130" src="./assets/NATHAN_AI.png"></v-img> </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item class="px-2" v-for="page in pages" :key="page.text" router :to="page.route">
          <v-list-item-icon>
            <v-icon class="pl-1" color="rgba(255, 255, 255, 1.0)" size="32">{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ page.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar white outlined app class="elevation-0">
      <div class=title_sign>
        <v-toolbar-title class="rainbow rainbow_text_animated"><b>SURGERY TOOLS DETECTION</b></v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="" target="_blank" text>
        <span class="mr-2">Version 1.0</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div>
        <router-view />
      </div>
    </v-main>

  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      pages: [
          {icon: "mdi-home",      text:"Home",       route: "/" },
          {icon: "mdi-camera",      text:"Video",       route: "/Video" },
          {icon: "mdi-eye",  text:"Vision", route: "/Vision" },
          {icon: "mdi-history",  text:"Log", route: "/log" },
          
        ]
    })
  };
</script>

<style scoped>

.rainbow_text_animated {  
  
  letter-spacing: 2;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 4s ease-in-out infinite;
  background-size: 400% 100%;

  font-size: 2.0em;
}

@keyframes rainbow_animation {
  0%,100% {
      background-position: 0 0;
  }

  50% {
      background-position: 100% 0;
  }
}

.title_text{  
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(54, 54, 54)
}

.title_sign{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.horizontalScroll {
    display: flex;
    width: max(100vw, 1920px);
    height: max(100vh, 1080px);
    
}
.scrollable{
  overflow: auto;
}

.logo_text{
  font-weight: 900;
  text-decoration: none;
  color: #14C0DC;
}
</style>
