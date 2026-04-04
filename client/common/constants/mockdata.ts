import { User } from '../types/types';
import antwerp from './mock/antwerp.json';
import chicago from './mock/chicago.json';
import toronto from './mock/toronto.json';
import san_francisco from './mock/san_francisco.json';


export const MOCK_USER: User = {
  id: 'u1',
  name: 'Demo User',
  email: 'demo@example.com',
};

export const MOCK_RESTAURANTS = {
  '51.219448,4.402464': antwerp,
  '43.653225,-79.383186': toronto,
  '41.878113,-87.629799': chicago,
  '37.7749295,-122.4194155': san_francisco,
};

export const MOCK_IMAGES: string[] = [
  'https://imgs.search.brave.com/zHpbo3QY1bMQdC-29Cc2OEH_0CeuFqa47KlSey4K8qk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qdW5rLWZvb2Rf/MTI2MTgzOC01OTI4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA',
  'https://imgs.search.brave.com/Zt9SLvlHn25rgU0bwOgh8TTn3fdMowRv8LKQw0FBtyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/ODQwOTUxNC9waG90/by9hLW1hbGUtY2hl/Zi1zZXJ2aW5nLWEt/ZmluZS1kaW5pbmct/ZGlzaC1pbi1hLXJl/c3RhdXJhbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU9L/MGxBQ2JLdG82b2lP/amc1eGdVeFkyZlBT/OEN0VDNmWDlIaEsy/bnRRLU09',
  'https://imgs.search.brave.com/_SHdyw8WBRz_ZTpSrv1r2As1ywlzSJTGj0h9fIQ67V0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/OTY2LzEzMC9zbWFs/bC9mcmVzaC1sZW1v/bi1zbGljZXMtb24t/ZGFyay1iYWNrZ3Jv/dW5kLWNpdHJ1cy1m/b29kZ3JhcGh5LWtp/dGNoZW4tZGVjb3It/aGVhbHRoLWNvbmNl/cHQtcGhvdG8uanBn',
  'https://imgs.search.brave.com/pTPjxHtjCQYC6T_itXe33BchqQqgg3gndIkqi7F_TL0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MzYzLzYwNS9zbWFs/bC9hLWJyYW5jaC1v/Zi1yYXctY2hlcnJ5/LXRvbWF0b2VzLXdp/dGgtc2FsdC1hbmQt/c3BpY2VzLW9uLWEt/ZGFyay1iYWNrZ3Jv/dW5kLXBob3RvLkpQ/Rw',
  'https://imgs.search.brave.com/V3cjHkNR_i2KO5IlRQC0CJI91qTrbwKa07yj8-kAoxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDUv/MzgyLzEyMC9zbWFs/bC9mcmVzaGx5LWJh/a2VkLWJyZWFkcy1z/dXJyb3VuZGVkLWJ5/LWZvb2QtYW5kLXNw/aWNlcy1vbi1kYXJr/LWJhY2tncm91bmQt/cGhvdG8uanBlZw',
  'https://imgs.search.brave.com/v7pn0CFVa4RogZX3eMWnueEmi4WTV8GahJjSVnjng7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/OTg4LzcxNi9zbWFs/bC90cnVmZmxlLWZy/aWVzLWluLWRlZXAt/ZnJ5ZXItZGlzaC1z/aWRlLXZpZXctb24t/ZGFyay1iYWNrZ3Jv/dW5kLWZhc3QtZm9v/ZC1waG90by5qcGc',
  'https://imgs.search.brave.com/S2IMbkFcxVGGoRhICywDKL8FP6l92Lh6zWDVTg9cJYY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/NjU5Lzg1My9zbWFs/bC9kZWxpY2lvdXMt/YnVyZ2VyLXdpdGgt/Y2hlZXNlLWxldHR1/Y2UtYW5kLWJhY29u/LW9uLXNsYXRlLXBs/YXRlLWdvdXJtZXQt/Zm9vZGdyYXBoeS1k/YXJrLWJhY2tncm91/bmQtZnJlZS1waG90/by5qcGc',
];
