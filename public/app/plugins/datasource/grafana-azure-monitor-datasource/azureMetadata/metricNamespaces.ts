/**
This list is obtained parsing https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/metrics-supported
To programatically get the list, execute in the browser console:
 
 const i = [];
 document.querySelectorAll('*[id]').forEach((el) => { 
  if(el.textContent.match(/^(microsoft|Microsoft|Wandisco)/)) {
    i.push(el.textContent)
  }});
  i;
 
Note: Validate that the output makes sense, the format of the page may change.
 */
export const supportedMetricNamespaces = [
  'microsoft.aadiam/azureADMetrics',
  'Microsoft.AnalysisServices/servers',
  'Microsoft.ApiManagement/service',
  'Microsoft.AppConfiguration/configurationStores',
  'Microsoft.AppPlatform/Spring',
  'Microsoft.Automation/automationAccounts',
  'microsoft.avs/privateClouds',
  'Microsoft.Batch/batchAccounts',
  'Microsoft.BatchAI/workspaces',
  'microsoft.bing/accounts',
  'Microsoft.Blockchain/blockchainMembers',
  'microsoft.botservice/botservices',
  'Microsoft.Cache/redis',
  'Microsoft.Cache/redisEnterprise',
  'Microsoft.Cdn/cdnwebapplicationfirewallpolicies',
  'Microsoft.Cdn/profiles',
  'Microsoft.ClassicCompute/domainNames/slots/roles',
  'Microsoft.ClassicCompute/virtualMachines',
  'Microsoft.ClassicStorage/storageAccounts',
  'Microsoft.ClassicStorage/storageAccounts/blobServices',
  'Microsoft.ClassicStorage/storageAccounts/fileServices',
  'Microsoft.ClassicStorage/storageAccounts/queueServices',
  'Microsoft.ClassicStorage/storageAccounts/tableServices',
  'Microsoft.Cloudtest/hostedpools',
  'Microsoft.Cloudtest/pools',
  'Microsoft.ClusterStor/nodes',
  'Microsoft.CognitiveServices/accounts',
  'Microsoft.Communication/CommunicationServices',
  'Microsoft.Compute/cloudServices',
  'Microsoft.Compute/cloudServices/roles',
  'microsoft.compute/disks',
  'Microsoft.Compute/virtualMachines',
  'Microsoft.Compute/virtualMachineScaleSets',
  'Microsoft.Compute/virtualMachineScaleSets/virtualMachines',
  'Microsoft.ConnectedCache/CacheNodes',
  'Microsoft.ConnectedVehicle/platformAccounts',
  'Microsoft.ContainerInstance/containerGroups',
  'Microsoft.ContainerRegistry/registries',
  'Microsoft.ContainerService/managedClusters',
  'Microsoft.CustomProviders/resourceproviders',
  'Microsoft.DataBoxEdge/dataBoxEdgeDevices',
  'Microsoft.DataCollaboration/workspaces',
  'Microsoft.DataFactory/datafactories',
  'Microsoft.DataFactory/factories',
  'Microsoft.DataLakeAnalytics/accounts',
  'Microsoft.DataLakeStore/accounts',
  'Microsoft.DataShare/accounts',
  'Microsoft.DBforMariaDB/servers',
  'Microsoft.DBforMySQL/flexibleServers',
  'Microsoft.DBforMySQL/servers',
  'Microsoft.DBforPostgreSQL/flexibleServers',
  'Microsoft.DBForPostgreSQL/serverGroupsv2',
  'Microsoft.DBforPostgreSQL/servers',
  'Microsoft.DBforPostgreSQL/serversv2',
  'Microsoft.Devices/ElasticPools',
  'Microsoft.Devices/ElasticPools/IotHubTenants',
  'Microsoft.Devices/IotHubs',
  'Microsoft.Devices/provisioningServices',
  'Microsoft.DigitalTwins/digitalTwinsInstances',
  'Microsoft.DocumentDB/cassandraClusters',
  'Microsoft.DocumentDB/DatabaseAccounts',
  'Microsoft.EventGrid/domains',
  'Microsoft.EventGrid/eventSubscriptions',
  'Microsoft.EventGrid/extensionTopics',
  'Microsoft.EventGrid/partnerNamespaces',
  'Microsoft.EventGrid/partnerTopics',
  'Microsoft.EventGrid/systemTopics',
  'Microsoft.EventGrid/topics',
  'Microsoft.EventHub/clusters',
  'Microsoft.EventHub/Namespaces',
  'Microsoft.HDInsight/clusters',
  'Microsoft.HealthcareApis/services',
  'Microsoft.HealthcareApis/workspaces/fhirservices',
  'Microsoft.HealthcareApis/workspaces/iotconnectors',
  'microsoft.hybridnetwork/networkfunctions',
  'microsoft.hybridnetwork/virtualnetworkfunctions',
  'microsoft.insights/autoscalesettings',
  'Microsoft.Insights/Components',
  'Microsoft.IoTCentral/IoTApps',
  'microsoft.keyvault/managedhsms',
  'Microsoft.KeyVault/vaults',
  'microsoft.kubernetes/connectedClusters',
  'Microsoft.Kusto/Clusters',
  'Microsoft.Logic/integrationServiceEnvironments',
  'Microsoft.Logic/Workflows',
  'Microsoft.MachineLearningServices/workspaces',
  'Microsoft.Maps/accounts',
  'Microsoft.Media/mediaservices',
  'Microsoft.Media/mediaservices/liveEvents',
  'Microsoft.Media/mediaservices/streamingEndpoints',
  'Microsoft.Media/videoanalyzers',
  'Microsoft.MixedReality/remoteRenderingAccounts',
  'Microsoft.MixedReality/spatialAnchorsAccounts',
  'Microsoft.NetApp/netAppAccounts/capacityPools',
  'Microsoft.NetApp/netAppAccounts/capacityPools/volumes',
  'Microsoft.Network/applicationgateways',
  'Microsoft.Network/azureFirewalls',
  'microsoft.network/bastionHosts',
  'Microsoft.Network/connections',
  'Microsoft.Network/dnszones',
  'Microsoft.Network/expressRouteCircuits',
  'Microsoft.Network/expressRouteCircuits/peerings',
  'Microsoft.Network/expressRouteGateways',
  'Microsoft.Network/expressRoutePorts',
  'Microsoft.Network/frontdoors',
  'Microsoft.Network/loadBalancers',
  'Microsoft.Network/natGateways',
  'Microsoft.Network/networkInterfaces',
  'Microsoft.Network/networkWatchers/connectionMonitors',
  'microsoft.network/p2svpngateways',
  'Microsoft.Network/privateDnsZones',
  'Microsoft.Network/privateEndpoints',
  'Microsoft.Network/privateLinkServices',
  'Microsoft.Network/publicIPAddresses',
  'Microsoft.Network/trafficManagerProfiles',
  'Microsoft.Network/virtualHubs',
  'microsoft.network/virtualnetworkgateways',
  'Microsoft.Network/virtualNetworks',
  'Microsoft.Network/virtualRouters',
  'microsoft.network/vpngateways',
  'Microsoft.NotificationHubs/Namespaces/NotificationHubs',
  'Microsoft.OperationalInsights/workspaces',
  'Microsoft.Peering/peerings',
  'Microsoft.Peering/peeringServices',
  'Microsoft.PowerBIDedicated/capacities',
  'microsoft.purview/accounts',
  'Microsoft.RecoveryServices/Vaults',
  'Microsoft.Relay/namespaces',
  'microsoft.resources/subscriptions',
  'Microsoft.Search/searchServices',
  'Microsoft.ServiceBus/Namespaces',
  'Microsoft.SignalRService/SignalR',
  'Microsoft.SignalRService/WebPubSub',
  'Microsoft.Sql/managedInstances',
  'Microsoft.Sql/servers/databases',
  'Microsoft.Sql/servers/elasticPools',
  'Microsoft.Storage/storageAccounts',
  'Microsoft.Storage/storageAccounts/blobServices',
  'Microsoft.Storage/storageAccounts/fileServices',
  'Microsoft.Storage/storageAccounts/queueServices',
  'Microsoft.Storage/storageAccounts/tableServices',
  'Microsoft.StorageCache/caches',
  'microsoft.storagesync/storageSyncServices',
  'Microsoft.StreamAnalytics/streamingjobs',
  'Microsoft.Synapse/workspaces',
  'Microsoft.Synapse/workspaces/bigDataPools',
  'Microsoft.Synapse/workspaces/kustoPools',
  'Microsoft.Synapse/workspaces/sqlPools',
  'Microsoft.TimeSeriesInsights/environments',
  'Microsoft.TimeSeriesInsights/environments/eventsources',
  'Microsoft.VMwareCloudSimple/virtualMachines',
  'Microsoft.Web/connections',
  'Microsoft.Web/hostingEnvironments',
  'Microsoft.Web/hostingEnvironments/multiRolePools',
  'Microsoft.Web/hostingEnvironments/workerPools',
  'Microsoft.Web/serverfarms',
  'Microsoft.Web/sites',
  'Microsoft.Web/sites/slots',
  'Microsoft.Web/staticSites',
  'Wandisco.Fusion/migrators',
];

export const supportedMetricNamespacesKusto = supportedMetricNamespaces
  .map((v) => `"${v.toLocaleLowerCase()}"`)
  .join(',');
