
import { IconType } from 'react-icons';
import { GrFormNext, GrFacebookOption, GrTwitter,GrInstagram,GrYoutube,GrPinterest,GrLinkedinOption, GrPhone, GrMailOption }from "react-icons/gr";


import getAllSocial from '@/lib/getAllSocial'

interface SocialMediaItem {
    id: number;
    smname: string;
    smurl: string;
    created_at: string;
    updated_at: string;
  }

  

  const socialMediaIcons: { [key: string]: IconType } = {
    Facebook: GrFacebookOption,
    Twitter: GrTwitter,
    Instagram: GrInstagram,
    Youtube:GrYoutube,
    Pinterest: GrPinterest,
    Linkedin:GrLinkedinOption
  };
  interface SocialMediaProps {
    socialMediaData: SocialMediaItem[];
  }
  export default async function socialMedia() {
    const socialMediaData = await  getAllSocial()
 
    return (
      <div>
        {socialMediaData.map((item:SocialMediaItem) => {
        const Icon = socialMediaIcons[item.smname];
        return (
          <div key={item.id}>
            <Icon />
            <a href={item.smurl} target="_blank" rel="noopener noreferrer">
              {item.smname}
            </a>
          </div>
        );
      })}
      </div>
    );
  };
  
