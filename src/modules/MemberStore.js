import MemberDataList from '@/assets/MemberData.json';
import Member from '@/classes/Member.js';

function convertToMember(data) {
  return new Member(data.FirstName, data.LastName, data.NickName, data.Username, data.SpiritAnimal, data.FavouriteBook, data.VotedBook);
}

function getMember(username) {
  return convertToMember(MemberDataList.find(member => {
    return member.Username == username;
  }));
}

function getAllMembers() {
  return MemberDataList.map(convertToMember);
}

export default {
  getMember, getAllMembers
};
