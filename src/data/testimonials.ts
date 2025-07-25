export interface Testimonials{
    id:number;
    name:string;
    image:string;
    text:string;
}

export const testimonials: Testimonials[] = [
    {
      id: 1,
      name: 'Jane Lewis',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'the services and products offered are very good, matched what I was looking for. now my house looks more beautiful and aesthetic.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Amazing quality furniture and excellent customer service. The delivery was fast and the assembly service was professional. Highly recommended!'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'I love the minimalist design and the attention to detail. The furniture perfectly matches my interior style and the prices are very reasonable.'
    }
];