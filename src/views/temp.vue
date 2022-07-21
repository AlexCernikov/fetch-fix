async created() {
    const response = await fetch('/user/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: 'dca@isd.com',
        password: 'test',
      }),
    });
    const data = await response.json();
    this.token = data.token;
    console.log('DATA', data, 'TOKEN', this.token);
    this.getUsers();
  },
  methods: {
    // async login() {
    //   const response = await fetch('/user/authenticate', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
    //     body: JSON.stringify({
    //       email: 'dca@isd.com',
    //       password: 'test',
    //     }),
    //   });
    // },
    // async login() {
    //   const response = await fetch('/user/authenticate', {
    //     body: JSON.stringify({
    //       method: 'POST',
    //       email: 'dca@isd.com',
    //       password: 'test',
    //     }),
    //   });
    //   console.log('DDDDDDDDDDDD');
    //   const data = await response.json();
    //   this.token = data.token;
    //   console.log('TOKEN', data);
    // },
    async  getUsers() {
      const response = await fetch('/user', {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = await response.json();
      this.users = data;
      console.log('GET DATA', data);
    },
  },

//     async created() {
//   },

<!-- <div
        v-for="user in users "
        :key="user.id">
        <UserItem v-if = "user.id === 4"
        :users="users"
        :user="user"
        @showUserItem="showUserItem" />
        </div> -->