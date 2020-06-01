export const clearImageMixins = {
  methods: {
    clearImage: function() {
      if (this.imageName != "") {
        this.imageName = "waterfall.jpeg";
      }
    },
  },
};
