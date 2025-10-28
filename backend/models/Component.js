import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
  {
    header: {
      title: {
        type: String,
        required: true,
        default: "Welcome to Our Company",
      },
      imageUrl: {
        type: String,
        default: "https://via.placeholder.com/800x400",
      },
    },
    navbar: {
      links: [
        {
          label: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    },
    footer: {
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Component = mongoose.model("Component", componentSchema);

export default Component;
