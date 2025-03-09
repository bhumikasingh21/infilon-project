import React from 'react';
import { MemberStoryOne, MemberStoryThree, MemberStoryTwo, MemberStoryFour } from '../assets/images';

const memberStories = [
  {
    id: 1,
    image: MemberStoryOne,
    title: "John’s Story",
    description: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
  },
  {
    id: 2,
    image: MemberStoryTwo,
    title: "The Journey",
    description: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
  },
  {
    id: 3,
    image: MemberStoryThree,
    title: "Catch Day",
    description: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
  },
  {
    id: 4,
    image: MemberStoryFour,
    title: "Trout Tales",
    description: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
  },
];

function MemberStories() {
  return (
    <section className='memberStoriesSection'>
      <div className='container'>
      <h2>Member stories</h2>
      <div className='memberStories desktopView'>
        {memberStories.map((story) => (
          <div key={story.id} className='memberStory'>
            <div className='memberStoryImg'>
              <img src={story.image} alt="Memberstory" />
            </div>
            <div className='memberStoryContent'>
              <h4>{story.title}</h4>
              <p>{story.description}</p>
              <button className='grayBtn'>Read more</button>
            </div>
          </div>
        ))}
      </div>
      <div className='memberStories mobileView'>
        {memberStories.map((story) => (
          <div key={story.id} className='memberStory'>
             <h4>{story.title}</h4>
             <div className='memberStoryInner'>
             <div className='memberStoryImg'>
              <img src={story.image} alt="Memberstory" />
              <button className='strokeBtn'>Read more</button>
            </div>
            <div className='memberStoryContent'>
              <p>{story.description}</p>
            </div>
             </div>
            
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default MemberStories;