import { fetcher } from "@/utils/fetcher";

export default async function Users() {
    const users = await fetcher('/users');

    return (
      <main className="flex min-h-screen flex-col items-center relative">
        <div className='mt-[250px]'>
            <h1>NextJs Users Page</h1>
            <h2>All Users</h2>
            <div className='flex gap-5 mt-3'>
                {users.map((user: any) => (<div className='bg-blue-700 p-3 rounded'key={user.id}>
                    <h2>username: {user.username}</h2>
                    <p>first: {user.first_name}</p>
                    <p>last: {user.last_name}</p>
                    <p>email: {user.email}</p>
                </div>))}
            </div>
        </div>
      </main>
    );
  }