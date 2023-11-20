

import React from 'react';
import './Profile.css';
import { FaHeart, FaEye, FaRegThumbsUp, FaStar, FaCheck } from 'react-icons/fa';
import { IoDiamondOutline } from "react-icons/io5";
const profileData = {
  name: 'Anuj Gosalia',
  username: '@anujgosalia',
  bio: 'CEO & Co-founder | TTT',
  followers: 6482,
  following: 2451,
  posts: 20,

};
const blogData = [
  {
    title: 'A Changing World Order',
    content: 'The world is changing at a feverish pace.Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including...',
    author: 'anujgosalia',
    date: 'August2',
    read: '2 mins Read',
    views: 102,
  },
  {
    title: 'India v/s Australia',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'anujgosalia',
    date: 'January 21',
    read: '3 min Read',
    views: 156,
  },
  {
    title: 'Write To Build',
    content: 'Writing is the first step to create:         -stories       -products       -companies',
    author: 'anujgosalia',
    date: 'Nov 18',
    read: '1 min Read',
    views: 228,
  },
];

const BlogCard = ({ title, date, author, views, read, content }) => {
  return (
    <div className="blog-card">
      <div className="blog-header">
        <h3>{title}</h3>
        <FaRegThumbsUp className="thumbs-up-icon" />
      </div>
      <p className="blog-content">{content}</p>
      <div className="blog-details">
        <p className="blog-author"><span className="highlight">musing</span> by {author}</p>
        <p className="blog-date">{date}. </p>
        <p className="blog-date">{read}. </p>
        <p className="blog-views">{views} Views</p>
      </div>
    </div>
  );
};
const Profile = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img className="logo" src="/assets/ttt.png" alt="Logo" />
        </div>
        <div className="title-container">
          <h1>STORIES</h1>
        </div>
        <div className="button-container">
          <button className="course-button">Courses</button>
        </div>
      </div>
      <div className="background-image">
        <img src='/assets/bg.jpg'></img>
      </div>
      <div className='profile-info-container'>
        <div className="profile-photo-container">
          <div className="profile-photo">
            <img src='/assets/anuj.jpg'></img>
          </div>
        </div>
        <div className="profile-details">
          <h3>{profileData.name}</h3>
          <div className='profile-icon'>
            <div className="icon-contain">
              <IoDiamondOutline className="icons1" />
            </div>
            <div className="icon-contain">
              <FaCheck className="icons2" />
            </div>
          </div>
          <div className="followers-info">
            <p>{profileData.followers} </p>
            <p>{profileData.following} </p>
          </div>
          <div className="followers-info">
            <h3>Followers </h3>
            <h3>Following</h3>
          </div>
        </div>
        <div className='profile-position'>
          <h3>Co-founder and CEO at Terribly Tiny Tales</h3>
          <a href='www.instagram/anujgosalia.com'> www.instagram/anujgosalia.com</a>
        </div>
        <div className="social-icons-container">
          <div className="icon-container">
            <FaStar className="icon1" />
            <span className="count">125</span>
          </div>
          <div className="icon-container">
            < FaRegThumbsUp className="icon2" />
            <span className="count">12</span>
          </div>
          <div className="icon-container">
            <FaEye className="icon3" />
            <span className="count">57.8k</span>
          </div>
          <div className="icon-container">
            <FaHeart className="icon4" />
            <span className="count">26.0k</span>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className='border'>
          <h2>134 Posts</h2>
          <section className='empty-border'></section>
        </div>

        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

    </div>
  );
};

export default Profile;
