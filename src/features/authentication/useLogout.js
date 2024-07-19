async function useLogout() {
  let { error } = await supabase.auth.signOut();
}

export default useLogout;
