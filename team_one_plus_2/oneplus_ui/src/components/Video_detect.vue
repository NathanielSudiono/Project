<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card class="pa-5">
          <v-card-title>Object Detection Video</v-card-title>
          <v-card-subtitle>
            Upload Video to detect objects
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-row class="mt-4">
            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>Upload Video</v-card-title>
                <v-card-text>
                  <v-file-input
                    v-model="videoFile"
                    label="Choose a video"
                    prepend-icon="mdi-video"
                  ></v-file-input>
                  <v-btn color="primary" @click="uploadVideo">Upload</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>Detection Results</v-card-title>
                <v-card-text>
                  <div v-if="videoResult">
                    <div ref="videoContainer" class="video-container"></div>
                  </div>
                  <div v-else>
                    <p>No results to display</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "VideoDetect",
  data() {
    return {
      videoFile: null,
      videoResult: null,
    };
  },
  methods: {
    async uploadVideo() {
      const formData = new FormData();
      formData.append('file', this.videoFile);

      try {
        const response = await fetch('http://localhost:8000/upload_video/', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.file_path) {
          this.videoResult = true;
          this.$nextTick(() => {
            this.connectWebSocket(encodeURIComponent(data.file_path));
          });
        } else {
          this.videoResult = null;
        }
      } catch (error) {
        console.error('Error uploading video:', error);
        this.videoResult = null;
      }
    },
    connectWebSocket(filePath) {
      const ws = new WebSocket(`ws://localhost:8000/ws_video/${filePath}`);
      ws.onopen = () => {
        console.log("WebSocket connection opened");
      };

      ws.onmessage = (event) => {
        const img = new Image();
        img.src = `data:image/jpeg;base64,${event.data}`;
        const videoContainer = this.$refs.videoContainer;
        if (videoContainer) {
          if (videoContainer.firstChild) {
            videoContainer.removeChild(videoContainer.firstChild);
          }
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
          videoContainer.appendChild(img);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed');
      };
    },
  },
};
</script>

<style scoped>
.video-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
</style>
