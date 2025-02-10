type Service = {
    id: string
    title: string
    description?: string
    categories: {
      title: string
      services: string[]
    }[]
  }
  
type ServicesData = {
    services: Service[]
  }
  
  


   type GuideData = {
    id: string;
    title: string;
    description?: string;
    items: GuideItem[];
  };
  
   type GuideItem = {
    title: string;
    details: GuideDetails;
  };
  
   type GuideDetails = {
    rate?: string;
    exemptions?: string | string[];
    effective?: string;
    moreInfo?: string;
    standards?: string[];
    requirements?: string[];
    registration?: string;
    filing?: string;
    payment?: string;
    purpose?: string;
    incentives?: string[];
    penalties?: string[];
    website?: string;
    services?: string;
  };