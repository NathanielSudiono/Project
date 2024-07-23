<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card class="pa-5">
          <v-card-title class="d-flex justify-center">Detection Log</v-card-title>
          <v-card-subtitle>History of image detections</v-card-subtitle>
          <v-divider></v-divider>
          <v-data-table
            :headers="headers"
            :items="logs"
            item-key="timestamp"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Detections</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
              </v-toolbar>
            </template>
            <template v-slot:[`item.timestamp`]="{ item }">
              {{ new Date(item.timestamp).toLocaleString() }}
            </template>
            <template v-slot:[`item.image`]="{ item }">
              <v-img :src="item.image" max-height="100" max-width="100"></v-img>
            </template>
            <template v-slot:[`item.objects`]="{ item }">
              <v-list>
                <v-list-item
                  v-for="obj in item.objects"
                  :key="obj.label"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ obj.label }}</v-list-item-title>
                    <v-list-item-subtitle>
                      Confidence: {{ obj.confidence }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LogHistory',
  data() {
    return {
      headers: [
        { text: 'Timestamp', value: 'timestamp' },        
        { text: 'Detected Objects', value: 'objects' },
      ],
      logs: [],
    };
  },
  created() {
    this.fetchLogs();
  },
  methods: {
    async fetchLogs() {
      try {
        const response = await axios.get('http://localhost:8000/logs');
        this.logs = response.data;
      } catch (error) {
        console.error("Error fetching logs: ", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
