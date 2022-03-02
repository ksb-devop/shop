import { useForm } from 'react-hook-form';

export default function Home() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = () => console.dir(`Email input value: ${email}`);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" {...register('test', { required: true })} />

    

      <input type="submit" />
    </form>
  );
}