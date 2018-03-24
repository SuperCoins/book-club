const pathToFaces =  require.context('@/assets/faces', true);

export default class Member {

  constructor(firstName, lastName, nickName, username,
  spiritAnimal, favouriteBook, votedBook) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.NickName = nickName;
    this.Username = username;
    this.SpritiAnimal = spiritAnimal;
    this.FavouriteBook = favouriteBook;
    this.VotedBook = votedBook;
    this.Face = this.getFace(this.Username);
  }

  getFace(username) {
    return pathToFaces('./' + username.toLowerCase() + '.jpg', true) || pathToFaces('./jenny.jpg', true);
  }
};
