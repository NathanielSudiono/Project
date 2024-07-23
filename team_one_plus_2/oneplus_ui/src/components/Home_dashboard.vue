<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card class="pa-5">
          <v-card-title>Object Detection Dashboard</v-card-title>
          <v-card-subtitle>Upload Image to detect objects</v-card-subtitle>
          <v-divider></v-divider>
          <v-row class="mt-4">
            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>Upload Image</v-card-title>
                <v-card-text>
                  <v-file-input
                    v-model="file"
                    label="Choose an image"
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                  <v-btn color="primary" @click="uploadImage">Upload</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>Detection Results</v-card-title>
                <v-card-text>
                  <div v-if="detectionResult" class="detection-result">
                    <v-img :src="detectionResult.image" max-height="80%" max-width="100%" contain></v-img>
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
  name: "HomeDashboard",
  data() {
    return {
      file: null,
      detectionResult: null,
    };
  },
  methods: {
    async uploadImage() {
      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await fetch('http://localhost:8000/upload_image/', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        this.detectionResult = {
          image: `data:image/jpeg;base64,${btoa(data.image)}`,
        };
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
  },
};
</script>

<style scoped>
.detection-result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
