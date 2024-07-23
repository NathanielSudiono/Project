<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Camera Stream for Object Detection</v-card-title>
          <v-card-text>
            <img ref="image" />
          </v-card-text>
          <v-card-actions>
            <v-btn @click="startCamera" color="primary">Start Camera</v-btn>
            <v-btn @click="stopCamera" color="secondary">Stop Camera</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VisionDetect',
  data() {
    return {
      ws: null,
      imageUrl: null
    };
  },
  methods: {
    async startCamera() {
      try {
        this.ws = new WebSocket('ws://localhost:8000/ws');
        this.ws.binaryType = 'blob';
        this.ws.onmessage = this.handleWebSocketMessage;
        this.ws.onopen = () => {
          console.log("WebSocket connection established");
        };
        this.ws.onclose = () => {
          console.log("WebSocket connection closed");
        };
        this.ws.onerror = (error) => {
          console.error("WebSocket error: ", error);
        };
      } catch (error) {
        console.error("Error starting WebSocket: ", error);
      }
    },
    stopCamera() {
      if (this.ws) {
        this.ws.close();
      }
      const image = this.$refs.image;
      if (this.imageUrl) {
        URL.revokeObjectURL(this.imageUrl);
        this.imageUrl = null;
      }
      if (image) {
        image.src = null;
      }
    },
    handleWebSocketMessage(event) {
      const image = this.$refs.image;
      if (!image) {
        console.error("Image element not found");
        return;
      }
      const data = event.data; // data is a base64 encoded string
      image.src = 'data:image/jpeg;base64,' + data;
    }
  },
  beforeDestroy() {
    this.stopCamera();
  }
};
</script>

<style scoped>
img {
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 100%;  /* Set max width to 100% of the container width */
  max-height: 80vh; /* Set max height to 80% of the viewport height */
  width: auto;      /* Maintain aspect ratio */
  height: auto;     /* Maintain aspect ratio */
  display: block;   /* Make sure the image is centered within its container */
  margin: 0 auto;   /* Center the image horizontally */
}
</style>
