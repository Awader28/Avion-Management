// import { useState } from 'react';
// import axios from 'axios';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleSubmit = async (event: any) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setErrorMessage('');
//         setSuccessMessage('');

//         try {
//             const response = await axios.post('http://localhost:8080/login/authenticate', {
//                 username: username,
//                 password: password
//             });

//             console.log(response.data);
//             setSuccessMessage('Login successful !');
//         } catch (error) {
//             console.error(error);
//             setErrorMessage('Invalid username or password.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center ">
//             <Card className="w-[350px]">
//                 <CardHeader>
//                     <CardTitle>Login</CardTitle>
//                     <CardDescription>Please enter your credentials.</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid w-full items-center gap-4">
//                             <div className="flex flex-col space-y-1.5">
//                                 <Label htmlFor="username">Username</Label>
//                                 <Input id="username" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
//                             </div>
//                             <div className="flex flex-col space-y-1.5">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input type="password" id="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
//                             </div>
//                         </div>
//                         {errorMessage && <p className="text-red-500 font-semibold text-xl p-3 ">{errorMessage}</p>}
//                         {successMessage && <p className="text-green-500 font-semibold text-xl p-3">{successMessage}</p>}

//                         <Button size="sm" className='w-full items-center mt-5' type="submit" disabled={isLoading}>Login</Button>

//                     </form>
//                 </CardContent>
//             </Card>
//         </div>
//     );

// };

// export default LoginForm;


import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:8080/login/authenticate', {
                username: username,
                password: password
            });

            console.log(response.data);
            setSuccessMessage('Login successful !');

            // Redirect the user after a successful login
            navigate('/avion/all');
        } catch (error) {
            console.error(error);
            setErrorMessage('Invalid username or password.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center ">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Please enter your credentials.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        {errorMessage && <p className="text-red-500 font-semibold text-xl p-3 ">{errorMessage}</p>}
                        {successMessage && <p className="text-green-500 font-semibold text-xl p-3">{successMessage}</p>}

                        <Button size="sm" className='w-full items-center mt-5' type="submit" disabled={isLoading}>Login</Button>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginForm;