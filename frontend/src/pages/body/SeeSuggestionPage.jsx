import SugesstionCard from '../../components/SugesstionCard';

export default function SeeSuggestionPage() {
  const senderInfo = {
    department: 'Department of Computer Science',
    school: 'School of Engineering and Technology',
    dateSent: '2024-09-30',
    timeSent: '10:15 AM'
  };
  return(
    <div>
      <SugesstionCard  senderInfo={senderInfo}/>
      <SugesstionCard  senderInfo={senderInfo}/>
      <SugesstionCard  senderInfo={senderInfo}/>
      <SugesstionCard  senderInfo={senderInfo}/>
      <SugesstionCard  senderInfo={senderInfo}/>
      
    </div>
  );
}
