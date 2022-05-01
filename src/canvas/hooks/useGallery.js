import { useRef, useState, useEffect } from 'react'

const useGallery = ({ images, galleryActive }) => {
  const [isReady, setReady] = useState(false)

  const groupsRef = useRef([])
  const wrapRef = useRef(null)
  const elemsRef = useRef(null)
  const navsRef = useRef(null)
  const navRef = useRef(null)
  const imagesRef = useRef([
    {
      name: 'Project 1',
      texture: images[0],
    },
    {
      name: 'Project 2',
      texture: images[1],
    },
    {
      name: 'project 3',
      texture: images[2],
    },
    {
      name: 'Project 4',
      texture: images[3],
    },
    {
      name: 'Project 5',
      texture: images[4],
    },
    {
      name: 'Project 6',
      texture: images[5],
    },
    {
      name: 'Project 7',
      texture: images[6],
    },
    {
      name: 'Project 8',
      texture: images[7],
    },
    {
      name: 'Project 9',
      texture: images[8],
    },
    {
      name: 'Project 10',
      texture: images[9],
    },
    {
      name: 'Project 11',
      texture: images[10],
    },
    {
      name: 'Project 12',
      texture: images[11],
    },
    {
      name: 'Project 13',
      texture: images[12],
    },
    {
      name: 'Project 13',
      texture: images[13],
    },
    {
      name: 'Project 14',
      texture: images[14],
    },
  ])

  /**
   * Init doms and data
   */
  useEffect(() => {
    if (!wrapRef?.current) {
      wrapRef.current = document.getElementById('gallery-header')
      elemsRef.current = [...document.querySelectorAll('.n')]
      navsRef.current = [...document.querySelectorAll('li')]
      navRef.current = document.querySelector('.nav')
    }
    setReady(galleryActive)
  }, [galleryActive])

  return {
    wrap: wrapRef.current,
    elems: elemsRef.current,
    navs: navsRef.current,
    nav: navRef.current,
    groups: groupsRef.current,
    data: imagesRef.current,
    isReady,
  }
}

export default useGallery
