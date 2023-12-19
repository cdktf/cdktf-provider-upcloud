# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-upcloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-upcloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server upcloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.Server.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.Server(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  network_interface: typing.Union[IResolvable, typing.List[ServerNetworkInterface]],
  zone: str,
  boot_order: str = None,
  cpu: typing.Union[int, float] = None,
  firewall: typing.Union[bool, IResolvable] = None,
  host: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  login: ServerLogin = None,
  mem: typing.Union[int, float] = None,
  metadata: typing.Union[bool, IResolvable] = None,
  nic_model: str = None,
  plan: str = None,
  simple_backup: ServerSimpleBackup = None,
  storage_devices: typing.Union[IResolvable, typing.List[ServerStorageDevices]] = None,
  tags: typing.List[str] = None,
  template: ServerTemplate = None,
  timezone: str = None,
  title: str = None,
  user_data: str = None,
  video_model: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | A valid domain name. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.bootOrder">boot_order</a></code> | <code>str</code> | The boot device order, `cdrom`\|`disk`\|`network` or comma separated combination of those values. Defaults to `disk`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | The number of CPU for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.firewall">firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Are firewall rules active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.host">host</a></code> | <code>typing.Union[int, float]</code> | Use this to start the VM on a specific host. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs to classify the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.login">login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.mem">mem</a></code> | <code>typing.Union[int, float]</code> | The size of memory for the server (in megabytes). |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the metadata service active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.nicModel">nic_model</a></code> | <code>str</code> | The model of the server's network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.plan">plan</a></code> | <code>str</code> | The pricing plan used for the server. You can list available server plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.simpleBackup">simple_backup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | simple_backup block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.storageDevices">storage_devices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]</code> | storage_devices block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | The server related tags. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | A timezone identifier, e.g. `Europe/Helsinki`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.title">title</a></code> | <code>str</code> | A short, informational description. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Defines URL for a server setup script, or the script body itself. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.videoModel">video_model</a></code> | <code>str</code> | The model of the server's video interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.hostname"></a>

- *Type:* str

A valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#hostname Server#hostname}

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#network_interface Server#network_interface}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.zone"></a>

- *Type:* str

The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#zone Server#zone}

---

##### `boot_order`<sup>Optional</sup> <a name="boot_order" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.bootOrder"></a>

- *Type:* str

The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#boot_order Server#boot_order}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

The number of CPU for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#cpu Server#cpu}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.firewall"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Are firewall rules active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#firewall Server#firewall}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.host"></a>

- *Type:* typing.Union[int, float]

Use this to start the VM on a specific host.

Refers to value from host -attribute. Only available for private cloud hosts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#host Server#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Key-value pairs to classify the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#labels Server#labels}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.login"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#login Server#login}

---

##### `mem`<sup>Optional</sup> <a name="mem" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.mem"></a>

- *Type:* typing.Union[int, float]

The size of memory for the server (in megabytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#mem Server#mem}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.metadata"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the metadata service active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#metadata Server#metadata}

---

##### `nic_model`<sup>Optional</sup> <a name="nic_model" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.nicModel"></a>

- *Type:* str

The model of the server's network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#nic_model Server#nic_model}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.plan"></a>

- *Type:* str

The pricing plan used for the server. You can list available server plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#plan Server#plan}

---

##### `simple_backup`<sup>Optional</sup> <a name="simple_backup" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.simpleBackup"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

simple_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#simple_backup Server#simple_backup}

---

##### `storage_devices`<sup>Optional</sup> <a name="storage_devices" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.storageDevices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]

storage_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#storage_devices Server#storage_devices}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

The server related tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#tags Server#tags}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#template Server#template}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.timezone"></a>

- *Type:* str

A timezone identifier, e.g. `Europe/Helsinki`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#timezone Server#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.title"></a>

- *Type:* str

A short, informational description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#title Server#title}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.userData"></a>

- *Type:* str

Defines URL for a server setup script, or the script body itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#user_data Server#user_data}

---

##### `video_model`<sup>Optional</sup> <a name="video_model" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.videoModel"></a>

- *Type:* str

The model of the server's video interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#video_model Server#video_model}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putLogin">put_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putSimpleBackup">put_simple_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putStorageDevices">put_storage_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetBootOrder">reset_boot_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetFirewall">reset_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMem">reset_mem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetNicModel">reset_nic_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetSimpleBackup">reset_simple_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetStorageDevices">reset_storage_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTemplate">reset_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetVideoModel">reset_video_model</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.Server.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.server.Server.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.server.Server.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.server.Server.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.server.Server.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.server.Server.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.server.Server.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.server.Server.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.server.Server.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.server.Server.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_login` <a name="put_login" id="@cdktf/provider-upcloud.server.Server.putLogin"></a>

```python
def put_login(
  create_password: typing.Union[bool, IResolvable] = None,
  keys: typing.List[str] = None,
  password_delivery: str = None,
  user: str = None
) -> None
```

###### `create_password`<sup>Optional</sup> <a name="create_password" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.createPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates a password should be create to allow access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#create_password Server#create_password}

---

###### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.keys"></a>

- *Type:* typing.List[str]

A list of ssh keys to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#keys Server#keys}

---

###### `password_delivery`<sup>Optional</sup> <a name="password_delivery" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.passwordDelivery"></a>

- *Type:* str

The delivery method for the server's root password (one of `none`, `email` or `sms`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#password_delivery Server#password_delivery}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.user"></a>

- *Type:* str

Username to be create to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#user Server#user}

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[ServerNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]

---

##### `put_simple_backup` <a name="put_simple_backup" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup"></a>

```python
def put_simple_backup(
  plan: str,
  time: str
) -> None
```

###### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup.parameter.plan"></a>

- *Type:* str

Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#plan Server#plan}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup.parameter.time"></a>

- *Type:* str

Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#time Server#time}

---

##### `put_storage_devices` <a name="put_storage_devices" id="@cdktf/provider-upcloud.server.Server.putStorageDevices"></a>

```python
def put_storage_devices(
  value: typing.Union[IResolvable, typing.List[ServerStorageDevices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putStorageDevices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]

---

##### `put_template` <a name="put_template" id="@cdktf/provider-upcloud.server.Server.putTemplate"></a>

```python
def put_template(
  storage: str,
  address: str = None,
  address_position: str = None,
  backup_rule: ServerTemplateBackupRule = None,
  delete_autoresize_backup: typing.Union[bool, IResolvable] = None,
  filesystem_autoresize: typing.Union[bool, IResolvable] = None,
  size: typing.Union[int, float] = None,
  title: str = None
) -> None
```

###### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.storage"></a>

- *Type:* str

A valid storage UUID or template name.

You can list available public templates with `upctl storage list --public --template` and available private templates with `upctl storage list --template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#storage Server#storage}

---

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.address"></a>

- *Type:* str

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#address Server#address}

---

###### `address_position`<sup>Optional</sup> <a name="address_position" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.addressPosition"></a>

- *Type:* str

The device position in the given bus (defined via field `address`).

For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#address_position Server#address_position}

---

###### `backup_rule`<sup>Optional</sup> <a name="backup_rule" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.backupRule"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#backup_rule Server#backup_rule}

---

###### `delete_autoresize_backup`<sup>Optional</sup> <a name="delete_autoresize_backup" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.deleteAutoresizeBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#delete_autoresize_backup Server#delete_autoresize_backup}

---

###### `filesystem_autoresize`<sup>Optional</sup> <a name="filesystem_autoresize" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.filesystemAutoresize"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#filesystem_autoresize Server#filesystem_autoresize}

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.size"></a>

- *Type:* typing.Union[int, float]

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#size Server#size}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.title"></a>

- *Type:* str

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#title Server#title}

---

##### `reset_boot_order` <a name="reset_boot_order" id="@cdktf/provider-upcloud.server.Server.resetBootOrder"></a>

```python
def reset_boot_order() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-upcloud.server.Server.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_firewall` <a name="reset_firewall" id="@cdktf/provider-upcloud.server.Server.resetFirewall"></a>

```python
def reset_firewall() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-upcloud.server.Server.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.server.Server.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-upcloud.server.Server.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-upcloud.server.Server.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_mem` <a name="reset_mem" id="@cdktf/provider-upcloud.server.Server.resetMem"></a>

```python
def reset_mem() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-upcloud.server.Server.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_nic_model` <a name="reset_nic_model" id="@cdktf/provider-upcloud.server.Server.resetNicModel"></a>

```python
def reset_nic_model() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-upcloud.server.Server.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_simple_backup` <a name="reset_simple_backup" id="@cdktf/provider-upcloud.server.Server.resetSimpleBackup"></a>

```python
def reset_simple_backup() -> None
```

##### `reset_storage_devices` <a name="reset_storage_devices" id="@cdktf/provider-upcloud.server.Server.resetStorageDevices"></a>

```python
def reset_storage_devices() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-upcloud.server.Server.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template` <a name="reset_template" id="@cdktf/provider-upcloud.server.Server.resetTemplate"></a>

```python
def reset_template() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-upcloud.server.Server.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-upcloud.server.Server.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-upcloud.server.Server.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_video_model` <a name="reset_video_model" id="@cdktf/provider-upcloud.server.Server.resetVideoModel"></a>

```python
def reset_video_model() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.server.Server.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.Server.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.server.Server.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.Server.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.server.Server.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.Server.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.Server.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Server to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.login">login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference">ServerLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackup">simple_backup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference">ServerSimpleBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevices">storage_devices</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.template">template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference">ServerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrderInput">boot_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewallInput">firewall_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostInput">host_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.loginInput">login_input</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.memInput">mem_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadataInput">metadata_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModelInput">nic_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackupInput">simple_backup_input</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevicesInput">storage_devices_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModelInput">video_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrder">boot_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewall">firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.host">host</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.mem">mem</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadata">metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModel">nic_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModel">video_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.server.Server.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.server.Server.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.Server.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.server.Server.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.Server.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.Server.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.server.Server.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.server.Server.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.Server.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.Server.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-upcloud.server.Server.property.login"></a>

```python
login: ServerLoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference">ServerLoginOutputReference</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-upcloud.server.Server.property.networkInterface"></a>

```python
network_interface: ServerNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a>

---

##### `simple_backup`<sup>Required</sup> <a name="simple_backup" id="@cdktf/provider-upcloud.server.Server.property.simpleBackup"></a>

```python
simple_backup: ServerSimpleBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference">ServerSimpleBackupOutputReference</a>

---

##### `storage_devices`<sup>Required</sup> <a name="storage_devices" id="@cdktf/provider-upcloud.server.Server.property.storageDevices"></a>

```python
storage_devices: ServerStorageDevicesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-upcloud.server.Server.property.template"></a>

```python
template: ServerTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference">ServerTemplateOutputReference</a>

---

##### `boot_order_input`<sup>Optional</sup> <a name="boot_order_input" id="@cdktf/provider-upcloud.server.Server.property.bootOrderInput"></a>

```python
boot_order_input: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-upcloud.server.Server.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall_input`<sup>Optional</sup> <a name="firewall_input" id="@cdktf/provider-upcloud.server.Server.property.firewallInput"></a>

```python
firewall_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-upcloud.server.Server.property.hostInput"></a>

```python
host_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-upcloud.server.Server.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.server.Server.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-upcloud.server.Server.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-upcloud.server.Server.property.loginInput"></a>

```python
login_input: ServerLogin
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---

##### `mem_input`<sup>Optional</sup> <a name="mem_input" id="@cdktf/provider-upcloud.server.Server.property.memInput"></a>

```python
mem_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-upcloud.server.Server.property.metadataInput"></a>

```python
metadata_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[ServerNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]

---

##### `nic_model_input`<sup>Optional</sup> <a name="nic_model_input" id="@cdktf/provider-upcloud.server.Server.property.nicModelInput"></a>

```python
nic_model_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.server.Server.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `simple_backup_input`<sup>Optional</sup> <a name="simple_backup_input" id="@cdktf/provider-upcloud.server.Server.property.simpleBackupInput"></a>

```python
simple_backup_input: ServerSimpleBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---

##### `storage_devices_input`<sup>Optional</sup> <a name="storage_devices_input" id="@cdktf/provider-upcloud.server.Server.property.storageDevicesInput"></a>

```python
storage_devices_input: typing.Union[IResolvable, typing.List[ServerStorageDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-upcloud.server.Server.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-upcloud.server.Server.property.templateInput"></a>

```python
template_input: ServerTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-upcloud.server.Server.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.server.Server.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-upcloud.server.Server.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `video_model_input`<sup>Optional</sup> <a name="video_model_input" id="@cdktf/provider-upcloud.server.Server.property.videoModelInput"></a>

```python
video_model_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.server.Server.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="@cdktf/provider-upcloud.server.Server.property.bootOrder"></a>

```python
boot_order: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.Server.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.Server.property.firewall"></a>

```python
firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.server.Server.property.host"></a>

```python
host: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.Server.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.server.Server.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mem`<sup>Required</sup> <a name="mem" id="@cdktf/provider-upcloud.server.Server.property.mem"></a>

```python
mem: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.Server.property.metadata"></a>

```python
metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nic_model`<sup>Required</sup> <a name="nic_model" id="@cdktf/provider-upcloud.server.Server.property.nicModel"></a>

```python
nic_model: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.Server.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-upcloud.server.Server.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.Server.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.server.Server.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-upcloud.server.Server.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `video_model`<sup>Required</sup> <a name="video_model" id="@cdktf/provider-upcloud.server.Server.property.videoModel"></a>

```python
video_model: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.Server.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.server.Server.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-upcloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  network_interface: typing.Union[IResolvable, typing.List[ServerNetworkInterface]],
  zone: str,
  boot_order: str = None,
  cpu: typing.Union[int, float] = None,
  firewall: typing.Union[bool, IResolvable] = None,
  host: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  login: ServerLogin = None,
  mem: typing.Union[int, float] = None,
  metadata: typing.Union[bool, IResolvable] = None,
  nic_model: str = None,
  plan: str = None,
  simple_backup: ServerSimpleBackup = None,
  storage_devices: typing.Union[IResolvable, typing.List[ServerStorageDevices]] = None,
  tags: typing.List[str] = None,
  template: ServerTemplate = None,
  timezone: str = None,
  title: str = None,
  user_data: str = None,
  video_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.hostname">hostname</a></code> | <code>str</code> | A valid domain name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.zone">zone</a></code> | <code>str</code> | The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder">boot_order</a></code> | <code>str</code> | The boot device order, `cdrom`\|`disk`\|`network` or comma separated combination of those values. Defaults to `disk`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | The number of CPU for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.firewall">firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Are firewall rules active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.host">host</a></code> | <code>typing.Union[int, float]</code> | Use this to start the VM on a specific host. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs to classify the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.login">login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.mem">mem</a></code> | <code>typing.Union[int, float]</code> | The size of memory for the server (in megabytes). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.metadata">metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the metadata service active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.nicModel">nic_model</a></code> | <code>str</code> | The model of the server's network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.plan">plan</a></code> | <code>str</code> | The pricing plan used for the server. You can list available server plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup">simple_backup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | simple_backup block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices">storage_devices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]</code> | storage_devices block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The server related tags. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.timezone">timezone</a></code> | <code>str</code> | A timezone identifier, e.g. `Europe/Helsinki`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.title">title</a></code> | <code>str</code> | A short, informational description. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.userData">user_data</a></code> | <code>str</code> | Defines URL for a server setup script, or the script body itself. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.videoModel">video_model</a></code> | <code>str</code> | The model of the server's video interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.ServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.ServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.server.ServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.ServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.ServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.ServerConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

A valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#hostname Server#hostname}

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[ServerNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#network_interface Server#network_interface}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.ServerConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#zone Server#zone}

---

##### `boot_order`<sup>Optional</sup> <a name="boot_order" id="@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder"></a>

```python
boot_order: str
```

- *Type:* str

The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#boot_order Server#boot_order}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.ServerConfig.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#cpu Server#cpu}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.ServerConfig.property.firewall"></a>

```python
firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Are firewall rules active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#firewall Server#firewall}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.server.ServerConfig.property.host"></a>

```python
host: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Use this to start the VM on a specific host.

Refers to value from host -attribute. Only available for private cloud hosts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#host Server#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.server.ServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.server.ServerConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs to classify the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#labels Server#labels}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-upcloud.server.ServerConfig.property.login"></a>

```python
login: ServerLogin
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#login Server#login}

---

##### `mem`<sup>Optional</sup> <a name="mem" id="@cdktf/provider-upcloud.server.ServerConfig.property.mem"></a>

```python
mem: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of memory for the server (in megabytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#mem Server#mem}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.ServerConfig.property.metadata"></a>

```python
metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the metadata service active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#metadata Server#metadata}

---

##### `nic_model`<sup>Optional</sup> <a name="nic_model" id="@cdktf/provider-upcloud.server.ServerConfig.property.nicModel"></a>

```python
nic_model: str
```

- *Type:* str

The model of the server's network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#nic_model Server#nic_model}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

The pricing plan used for the server. You can list available server plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#plan Server#plan}

---

##### `simple_backup`<sup>Optional</sup> <a name="simple_backup" id="@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup"></a>

```python
simple_backup: ServerSimpleBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

simple_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#simple_backup Server#simple_backup}

---

##### `storage_devices`<sup>Optional</sup> <a name="storage_devices" id="@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices"></a>

```python
storage_devices: typing.Union[IResolvable, typing.List[ServerStorageDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]

storage_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#storage_devices Server#storage_devices}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-upcloud.server.ServerConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The server related tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#tags Server#tags}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-upcloud.server.ServerConfig.property.template"></a>

```python
template: ServerTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#template Server#template}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.ServerConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

A timezone identifier, e.g. `Europe/Helsinki`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#timezone Server#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerConfig.property.title"></a>

```python
title: str
```

- *Type:* str

A short, informational description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#title Server#title}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-upcloud.server.ServerConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Defines URL for a server setup script, or the script body itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#user_data Server#user_data}

---

##### `video_model`<sup>Optional</sup> <a name="video_model" id="@cdktf/provider-upcloud.server.ServerConfig.property.videoModel"></a>

```python
video_model: str
```

- *Type:* str

The model of the server's video interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#video_model Server#video_model}

---

### ServerLogin <a name="ServerLogin" id="@cdktf/provider-upcloud.server.ServerLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerLogin(
  create_password: typing.Union[bool, IResolvable] = None,
  keys: typing.List[str] = None,
  password_delivery: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.createPassword">create_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates a password should be create to allow access. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.keys">keys</a></code> | <code>typing.List[str]</code> | A list of ssh keys to access the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery">password_delivery</a></code> | <code>str</code> | The delivery method for the server's root password (one of `none`, `email` or `sms`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.user">user</a></code> | <code>str</code> | Username to be create to access the server. |

---

##### `create_password`<sup>Optional</sup> <a name="create_password" id="@cdktf/provider-upcloud.server.ServerLogin.property.createPassword"></a>

```python
create_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates a password should be create to allow access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#create_password Server#create_password}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.server.ServerLogin.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of ssh keys to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#keys Server#keys}

---

##### `password_delivery`<sup>Optional</sup> <a name="password_delivery" id="@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery"></a>

```python
password_delivery: str
```

- *Type:* str

The delivery method for the server's root password (one of `none`, `email` or `sms`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#password_delivery Server#password_delivery}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-upcloud.server.ServerLogin.property.user"></a>

```python
user: str
```

- *Type:* str

Username to be create to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#user Server#user}

---

### ServerNetworkInterface <a name="ServerNetworkInterface" id="@cdktf/provider-upcloud.server.ServerNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerNetworkInterface(
  type: str,
  bootable: typing.Union[bool, IResolvable] = None,
  ip_address: str = None,
  ip_address_family: str = None,
  network: str = None,
  source_ip_filtering: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type">type</a></code> | <code>str</code> | Network interface type. For private network interfaces, a network must be specified with an existing network id. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | `true` if this interface should be used for network booting. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress">ip_address</a></code> | <code>str</code> | The assigned IP address. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily">ip_address_family</a></code> | <code>str</code> | The IP address type of this interface (one of `IPv4` or `IPv6`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network">network</a></code> | <code>str</code> | The unique ID of a network to attach this network to. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering">source_ip_filtering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | `true` if source IP should be filtered. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type"></a>

```python
type: str
```

- *Type:* str

Network interface type. For private network interfaces, a network must be specified with an existing network id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#type Server#type}

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable"></a>

```python
bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

`true` if this interface should be used for network booting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#bootable Server#bootable}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The assigned IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#ip_address Server#ip_address}

---

##### `ip_address_family`<sup>Optional</sup> <a name="ip_address_family" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily"></a>

```python
ip_address_family: str
```

- *Type:* str

The IP address type of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#ip_address_family Server#ip_address_family}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network"></a>

```python
network: str
```

- *Type:* str

The unique ID of a network to attach this network to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#network Server#network}

---

##### `source_ip_filtering`<sup>Optional</sup> <a name="source_ip_filtering" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering"></a>

```python
source_ip_filtering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

`true` if source IP should be filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#source_ip_filtering Server#source_ip_filtering}

---

### ServerSimpleBackup <a name="ServerSimpleBackup" id="@cdktf/provider-upcloud.server.ServerSimpleBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerSimpleBackup(
  plan: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan">plan</a></code> | <code>str</code> | Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time">time</a></code> | <code>str</code> | Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230). |

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan"></a>

```python
plan: str
```

- *Type:* str

Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#plan Server#plan}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time"></a>

```python
time: str
```

- *Type:* str

Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#time Server#time}

---

### ServerStorageDevices <a name="ServerStorageDevices" id="@cdktf/provider-upcloud.server.ServerStorageDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerStorageDevices.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerStorageDevices(
  storage: str,
  address: str = None,
  address_position: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage">storage</a></code> | <code>str</code> | A valid storage UUID. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.address">address</a></code> | <code>str</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition">address_position</a></code> | <code>str</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.type">type</a></code> | <code>str</code> | The device type the storage will be attached as. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage"></a>

```python
storage: str
```

- *Type:* str

A valid storage UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#storage Server#storage}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.address"></a>

```python
address: str
```

- *Type:* str

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#address Server#address}

---

##### `address_position`<sup>Optional</sup> <a name="address_position" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition"></a>

```python
address_position: str
```

- *Type:* str

The device position in the given bus (defined via field `address`).

For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#address_position Server#address_position}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.type"></a>

```python
type: str
```

- *Type:* str

The device type the storage will be attached as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#type Server#type}

---

### ServerTemplate <a name="ServerTemplate" id="@cdktf/provider-upcloud.server.ServerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerTemplate(
  storage: str,
  address: str = None,
  address_position: str = None,
  backup_rule: ServerTemplateBackupRule = None,
  delete_autoresize_backup: typing.Union[bool, IResolvable] = None,
  filesystem_autoresize: typing.Union[bool, IResolvable] = None,
  size: typing.Union[int, float] = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.storage">storage</a></code> | <code>str</code> | A valid storage UUID or template name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.address">address</a></code> | <code>str</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition">address_position</a></code> | <code>str</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule">backup_rule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup">delete_autoresize_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize">filesystem_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.title">title</a></code> | <code>str</code> | A short, informative description. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerTemplate.property.storage"></a>

```python
storage: str
```

- *Type:* str

A valid storage UUID or template name.

You can list available public templates with `upctl storage list --public --template` and available private templates with `upctl storage list --template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#storage Server#storage}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerTemplate.property.address"></a>

```python
address: str
```

- *Type:* str

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#address Server#address}

---

##### `address_position`<sup>Optional</sup> <a name="address_position" id="@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition"></a>

```python
address_position: str
```

- *Type:* str

The device position in the given bus (defined via field `address`).

For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#address_position Server#address_position}

---

##### `backup_rule`<sup>Optional</sup> <a name="backup_rule" id="@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule"></a>

```python
backup_rule: ServerTemplateBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#backup_rule Server#backup_rule}

---

##### `delete_autoresize_backup`<sup>Optional</sup> <a name="delete_autoresize_backup" id="@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup"></a>

```python
delete_autoresize_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#delete_autoresize_backup Server#delete_autoresize_backup}

---

##### `filesystem_autoresize`<sup>Optional</sup> <a name="filesystem_autoresize" id="@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize"></a>

```python
filesystem_autoresize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#filesystem_autoresize Server#filesystem_autoresize}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-upcloud.server.ServerTemplate.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#size Server#size}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerTemplate.property.title"></a>

```python
title: str
```

- *Type:* str

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#title Server#title}

---

### ServerTemplateBackupRule <a name="ServerTemplateBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerTemplateBackupRule(
  interval: str,
  retention: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval">interval</a></code> | <code>str</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time">time</a></code> | <code>str</code> | The time of day when the backup is created. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval"></a>

```python
interval: str
```

- *Type:* str

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#interval Server#interval}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#retention Server#retention}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time"></a>

```python
time: str
```

- *Type:* str

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#time Server#time}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLoginOutputReference <a name="ServerLoginOutputReference" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerLoginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword">reset_create_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys">reset_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery">reset_password_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create_password` <a name="reset_create_password" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword"></a>

```python
def reset_create_password() -> None
```

##### `reset_keys` <a name="reset_keys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys"></a>

```python
def reset_keys() -> None
```

##### `reset_password_delivery` <a name="reset_password_delivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery"></a>

```python
def reset_password_delivery() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput">create_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput">keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput">password_delivery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword">create_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery">password_delivery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_password_input`<sup>Optional</sup> <a name="create_password_input" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput"></a>

```python
create_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput"></a>

```python
keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_delivery_input`<sup>Optional</sup> <a name="password_delivery_input" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput"></a>

```python
password_delivery_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `create_password`<sup>Required</sup> <a name="create_password" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword"></a>

```python
create_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_delivery`<sup>Required</sup> <a name="password_delivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery"></a>

```python
password_delivery: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue"></a>

```python
internal_value: ServerLogin
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---


### ServerNetworkInterfaceList <a name="ServerNetworkInterfaceList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServerNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServerNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]]

---


### ServerNetworkInterfaceOutputReference <a name="ServerNetworkInterfaceOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable">reset_bootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily">reset_ip_address_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering">reset_source_ip_filtering</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bootable` <a name="reset_bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable"></a>

```python
def reset_bootable() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ip_address_family` <a name="reset_ip_address_family" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily"></a>

```python
def reset_ip_address_family() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_source_ip_filtering` <a name="reset_source_ip_filtering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering"></a>

```python
def reset_source_ip_filtering() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating">ip_address_floating</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput">bootable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput">ip_address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput">source_ip_filtering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily">ip_address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering">source_ip_filtering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_floating`<sup>Required</sup> <a name="ip_address_floating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating"></a>

```python
ip_address_floating: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `bootable_input`<sup>Optional</sup> <a name="bootable_input" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput"></a>

```python
bootable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_family_input`<sup>Optional</sup> <a name="ip_address_family_input" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput"></a>

```python
ip_address_family_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `source_ip_filtering_input`<sup>Optional</sup> <a name="source_ip_filtering_input" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput"></a>

```python
source_ip_filtering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable"></a>

```python
bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_address_family`<sup>Required</sup> <a name="ip_address_family" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily"></a>

```python
ip_address_family: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `source_ip_filtering`<sup>Required</sup> <a name="source_ip_filtering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering"></a>

```python
source_ip_filtering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServerNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>]

---


### ServerSimpleBackupOutputReference <a name="ServerSimpleBackupOutputReference" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerSimpleBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue"></a>

```python
internal_value: ServerSimpleBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---


### ServerStorageDevicesList <a name="ServerStorageDevicesList" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerStorageDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServerStorageDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServerStorageDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]]

---


### ServerStorageDevicesOutputReference <a name="ServerStorageDevicesOutputReference" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerStorageDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition">reset_address_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_address_position` <a name="reset_address_position" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition"></a>

```python
def reset_address_position() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput">address_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput">storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition">address_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage">storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_position_input`<sup>Optional</sup> <a name="address_position_input" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput"></a>

```python
address_position_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput"></a>

```python
storage_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_position`<sup>Required</sup> <a name="address_position" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition"></a>

```python
address_position: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage"></a>

```python
storage: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServerStorageDevices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>]

---


### ServerTemplateBackupRuleOutputReference <a name="ServerTemplateBackupRuleOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerTemplateBackupRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput">retention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput"></a>

```python
retention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue"></a>

```python
internal_value: ServerTemplateBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---


### ServerTemplateOutputReference <a name="ServerTemplateOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import server

server.ServerTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule">put_backup_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition">reset_address_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule">reset_backup_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup">reset_delete_autoresize_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize">reset_filesystem_autoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_rule` <a name="put_backup_rule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule"></a>

```python
def put_backup_rule(
  interval: str,
  retention: typing.Union[int, float],
  time: str
) -> None
```

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule.parameter.interval"></a>

- *Type:* str

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#interval Server#interval}

---

###### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule.parameter.retention"></a>

- *Type:* typing.Union[int, float]

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#retention Server#retention}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule.parameter.time"></a>

- *Type:* str

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/server#time Server#time}

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_address_position` <a name="reset_address_position" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition"></a>

```python
def reset_address_position() -> None
```

##### `reset_backup_rule` <a name="reset_backup_rule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule"></a>

```python
def reset_backup_rule() -> None
```

##### `reset_delete_autoresize_backup` <a name="reset_delete_autoresize_backup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup"></a>

```python
def reset_delete_autoresize_backup() -> None
```

##### `reset_filesystem_autoresize` <a name="reset_filesystem_autoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize"></a>

```python
def reset_filesystem_autoresize() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule">backup_rule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference">ServerTemplateBackupRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput">address_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput">backup_rule_input</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput">delete_autoresize_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput">filesystem_autoresize_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput">storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition">address_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup">delete_autoresize_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize">filesystem_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage">storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_rule`<sup>Required</sup> <a name="backup_rule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule"></a>

```python
backup_rule: ServerTemplateBackupRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference">ServerTemplateBackupRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_position_input`<sup>Optional</sup> <a name="address_position_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput"></a>

```python
address_position_input: str
```

- *Type:* str

---

##### `backup_rule_input`<sup>Optional</sup> <a name="backup_rule_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput"></a>

```python
backup_rule_input: ServerTemplateBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---

##### `delete_autoresize_backup_input`<sup>Optional</sup> <a name="delete_autoresize_backup_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput"></a>

```python
delete_autoresize_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filesystem_autoresize_input`<sup>Optional</sup> <a name="filesystem_autoresize_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput"></a>

```python
filesystem_autoresize_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput"></a>

```python
storage_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_position`<sup>Required</sup> <a name="address_position" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition"></a>

```python
address_position: str
```

- *Type:* str

---

##### `delete_autoresize_backup`<sup>Required</sup> <a name="delete_autoresize_backup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup"></a>

```python
delete_autoresize_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filesystem_autoresize`<sup>Required</sup> <a name="filesystem_autoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize"></a>

```python
filesystem_autoresize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage"></a>

```python
storage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue"></a>

```python
internal_value: ServerTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---



