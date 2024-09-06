import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}/>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://korsar:korsar123@cluster0.8417z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();

  const meetupCollection = await db.collection("meetups");

  const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
  };
}

export async function getStaticProps(context) {
  // fetch data to single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://korsar:korsar123@cluster0.8417z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();

  const meetupCollection = await db.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupId)});

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
      }
    }
  };
}

export default MeetupDetails;