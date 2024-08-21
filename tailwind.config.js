/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'noto-serif': ['Noto Serif', 'serif'],
      },
      colors:{
        'dark-blue' : '#192732',
        'color1': '#412E21',
        'color2': '#F8EDE3',
        'color3': '#E2B49D',
        'color4': '#50271F',
        'color5': '#84523C',
      },
      backgroundImage:
      {
        'image1' : "url('../../')",
        'image2' : 'url("https://media.istockphoto.com/id/2150177599/photo/the-paint-is-mixed-in-a-bucket-water-based-paint-mixing-water-based-paint-in-a-bucket-using-a.jpg?s=612x612&w=0&k=20&c=ChBratPqC01ddZUPHZcb9-fEtLVx8SU4oIq4LszxSMk=")',
        'image3' : 'url("https://media.istockphoto.com/id/116009911/photo/glue.jpg?s=2048x2048&w=is&k=20&c=U5D-ZB7t3UuXPBncGzQZ3T6fZzynrwuhDqv8j7eabYA=")',
        'image4' : 'url("https://media.istockphoto.com/id/1127843446/photo/house-painting.jpg?s=2048x2048&w=is&k=20&c=OgtP5kyoUHowWK5EHUFEF4pMBamyfHrPTIAytZQrJwE=")',
        'image5' : 'url("https://media.istockphoto.com/id/1222231958/photo/close-up-of-glue-on-wood.jpg?s=2048x2048&w=is&k=20&c=gU8Tlzf810Mmw8QYzPzNBJYLeavvvIs157h_HUg5O5k=")',
        'image6' : 'url("https://images.unsplash.com/photo-1536786724684-63545518d243?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2x1ZSUyMGJvdHRlbHxlbnwwfHwwfHx8MA%3D%3D")',
      },
      boxShadow: {
        'custom-shadow': '2px 1px 36px -10px rgba(69,65,69,0.57)',
      },
    },
  },
  plugins: [],
}

