export default function initialStoreState() {
  return {
    tabs: [
      { id: 'employer', title: 'Employer', description: 'enter maximum offer' },
      { id: 'employee', title: 'Employee', description: 'enter minimum salary' },
    ],
    currentTab: 'employer',
    amounts: { },
  };
}
